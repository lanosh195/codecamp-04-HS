import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { IQuery } from "../../src/commons/types/generated/type";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;
const LoginSuccessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);
  return (
    <>
      <div>로그인 성공하였습니다 제발성공 제발</div>
      <div>{userInfo.name}님 환영합니다.</div>
    </>
  );
};

export default withAuth(LoginSuccessPage);
