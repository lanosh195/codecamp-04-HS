import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function MarketListUI(props) {
  const { moveToPage } = useMoveToPage();
  return (
    <>
      <div>마켓입니다.</div>
      <div>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />

        <div>
          {/* 베스트 상품 맵으로 뿌리기 */}
          <div>
            <img></img>
            <div>title</div>
            <div>remarks</div>
            <div>price</div>
            <div>picked</div>
          </div>
        </div>

        <div>
          {/* 상품들 맵으로 뿌리기 */}
          <div>
            <img></img>
            <div>title</div>
            <div>price</div>
            <div>장바구니</div>
          </div>
        </div>
        <button onClick={moveToPage("/boards/market/new")}>등록하기</button>
      </div>
    </>
  );
}
