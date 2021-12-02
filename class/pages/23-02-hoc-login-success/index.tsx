import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/type";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccessPage(props) {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  return (
    <>
      <div>로그인 성공하였습니다 제발성공 제발</div>
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
