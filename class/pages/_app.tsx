// import { GraphQLClient } from "graphql-request";
import * as Sentry from "@sentry/nextjs";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import router from "next/router";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPHP4KheCI1Qx8abGvLq6HApHmDsECbzc",
  authDomain: "codecamp-04-hs.firebaseapp.com",
  projectId: "codecamp-04-hs",
  storageBucket: "codecamp-04-hs.appspot.com",
  messagingSenderId: "171235021090",
  appId: "1:171235021090:web:702caea9a1031b32e7557b",
};

interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
}

Sentry.init({
  dsn: "https://10edf894102d4a958c956e563d746d49@o1091868.ingest.sentry.io/6109518",
});
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setAccessToken] = useState("");
  const [myuserInfo, setUserInfo] = useState({});
  const myValue = {
    accessToekn: myAccessToken,
    setAccessToken: setAccessToken,
    userInfo: myuserInfo,
    setUserInfo: setUserInfo,
  };
  // ///???????????? ?????????, ??? ????????????
  // if(typeof window !=="undefined"){

  // }
  // /// ?????????????????? ?????????
  // if(process.browser)

  //useEffect ??????
  //?????? ??????????????? ????????? ????????? ????????? ????????? ???????????????!!!!///////////
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
  }, []);

  //operation -> ?????? ????????? ?????? , forward -> ?????? ????????? ??? ?????? ??????
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      // graphQlErrors??? ???????????? ???????????? ??????
      for (const err of graphQLErrors) {
        // 1. ???????????? ????????? ??????
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccessToken(setAccessToken);
          //3. ????????? ????????? ?????? ?????? ????????????
          operation.setContext({
            headers: {
              ...operation.getContext().headers, // <-- ?????? ????????? ??? ????????????
              authorization: `bearer ${newAccessToken}`, //2. refreshToken?????? accessToken ????????? ?????? => restoreAccessToken
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken} ` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
