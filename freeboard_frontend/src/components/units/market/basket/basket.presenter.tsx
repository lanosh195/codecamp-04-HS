export default function BasketUI(props: any) {
  return (
    <>
      <div>장바구니</div>
      {props.baskets.map((el) => (
        <div key={el._id}>
          <div>{el.name}</div>
          <div>{el.remarks}</div>
          <div>{el.conetents}</div>
          <div>{el.price}</div>
          <button onClick={props.onCLickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
    </>
  );
}
