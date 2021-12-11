// import { GraphQLClient } from "graphql-request";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
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
  useInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
}
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
  // ///윈도우가 없다면, 즉 서버라면
  // if(typeof window !=="undefined"){

  // }
  // /// 브라우저인지 아닌지
  // if(process.browser)

  //useEffect 사용
  //로컬 스토리지에 토큰이 있으면 꺼내서 글로벌 스테이트로!!!!///////////
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setAccessToken(accessToken);
  }, []);

  //operation -> 방금 실패한 쿼리 , forward -> 방금 실패한 거 다시 전송
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      // graphQlErrors를 에러라는 이름으로 반복
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccessToken(setAccessToken);
          //3. 기존에 실패한 요청 다시 요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers, // <-- 기존 내용은 다 가져오고
              authorization: `bearer ${newAccessToken}`, //2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
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
