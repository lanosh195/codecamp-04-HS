import Head from "next/head";
export default function MyPageUI(props: any) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {/* <input type="text" /> */}
      <div>500원</div>
      <button onClick={props.onClickPayment}>결제하기</button>

      <div>내 포인트:{props.data?.fetchUserLoggedIn.userPoint?.amount}</div>
      <div>내가 산 상품:{props.data2?.fetchUseditemsIBought.name}</div>
    </>
  );
}
