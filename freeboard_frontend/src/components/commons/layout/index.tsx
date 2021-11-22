import { ReactChild } from "react";
import Banner from "./banner/Banner.container";
import Footer from "./footer/Footer.container";
import Header from "./header/Header.container";
import Navigation from "./Navigation/Navigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BodyWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  /* width: 300px;
  height: 500px;
  background-color: #eef8b2; */
`;

const HIDDEN_HEADERS = [
  "/12-05-modal-address-sate-prev",
  //...
];

interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  //asPath 주소값

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>sidebar</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
