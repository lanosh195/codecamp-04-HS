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
      충전 금액:
      <input type="text" onChange={props.setPoint} />
      <button onClick={props.onClickPayment}>충전하기</button>
      <div>내 포인트:{props.data?.fetchUserLoggedIn.userPoint?.amount}</div>
      <div>
        내가 산 상품:
        {props.data2?.fetchUseditemsIBought.map((el: any) => (
          <div key={el._id}>
            <div>상품명:{el.name}</div>
            <div>한줄요약:{el.remarks}</div>
            <div>상품설명:{el.contents}</div>
            <div>가격:{el.price}</div>
            <div>구매 일시:{el.createdAt}</div>
          </div>
        ))}
      </div>
    </>
  );
}
