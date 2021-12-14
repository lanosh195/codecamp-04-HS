import { useMutation, useQuery } from "@apollo/client";
import MyPageUI from "./MyPage.presenter";
import { FETCH_USER_LOGGEDIN, CEATE_POINT_LOADING } from "./MyPage.queries";

export default function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [createPoint] = useMutation(CEATE_POINT_LOADING);

  function onClickPayment() {
    const IMP = window.IMP;
    IMP.init("imp49910675"); // Example: imp49910675 //mine imp43608408
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 500",
        amount: 500,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", //모바일 결제 후 리다이렉트 될 주소
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          createPoint({
            variables: { impUid: rsp.imp._uid },
            refetchQueries: [{ query: FETCH_USER_LOGGEDIN }],
          });
        } else {
          // 결제 실패 시
        }
      }
    );
  }
  return <MyPageUI onClickPayment={onClickPayment} data={data} />;
}
