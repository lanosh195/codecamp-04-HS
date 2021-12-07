import { useQuery, gql } from "@apollo/client";
import { el } from "date-fns/locale";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/type";

const FTECH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      title
      writer
    }
  }
`;
export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FTECH_BOARDS
  );

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    const baskets = JSON.parse(localStorage.getItem("basket") || "[]") || [];
    //이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl: IBoard) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }
    // const newEl={...el}
    // delete newEl.__typename

    const { __typename, ...newEl } = el;
    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  //   function onClickBasket(el) {
  //     return function 이름은상관없음(event) {
  //       console.log(el);
  //     };
  //   }

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </>
  );
}
