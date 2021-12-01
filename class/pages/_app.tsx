import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { AppProps } from "next/dist/shared/lib/router/router";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
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
}
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setAccessToken] = useState("");
  // const [myuserInfo, setMyUserInfo] = useState({});
  const myValue = {
    accessToekn: myAccessToken,
    setAccessToken: setAccessToken,
    // userInfo: myuserInfo,
    // setUserInfo: setMyUserInfo,
  };

  const uploadLink = createUploadLink({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken} ` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as any]),
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
