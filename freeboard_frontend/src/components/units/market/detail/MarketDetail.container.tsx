import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  BUY_USEDITEM,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.useditemId),
    },
  });

  console.log(data);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const [buyUseditem] = useMutation(BUY_USEDITEM);

  function onCLickMoveToUpdate() {
    router.push(`/market${router.query.useditemId}/edit`);
  }
  function onClickMoveToList() {
    router.push("/market");
  }
  //상품 삭제
  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("상품이 삭제되었습니다.");
      router.push("/market");
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  }
  //장바구니에 담기
  function onClickBasket() {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (data?.fetchUseditem._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다.");
      return;
    }

    const { ...newEl } = data?.fetchUseditem;
    baskets.push(newEl);

    localStorage.setItem("basket", JSON.stringify(baskets));
    alert("장바구니에 상품을 담았습니다.");
  }
  //상품 수정페이지로 이동
  function onClickEdit() {
    router.push(`/market/${router.query.useditemId}/edit`);
  }

  //상품 찜하기
  function onClickPick() {
    toggleUseditemPick({
      variables: { useditemId: router.query.useditemId },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  }

  //상품 구매
  function onClickBuyItem(id: any) {
    buyUseditem({
      variables: { useritemId: id },
    });
    alert("상품 구매가 완료되었습니다.");
  }

  return (
    <MarketDetailUI
      onClickDelete={onClickDelete}
      onCLickMoveToUpdate={onCLickMoveToUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickBasket={onClickBasket}
      onClickEdit={onClickEdit}
      onClickPick={onClickPick}
      onClickBuyItem={onClickBuyItem}
      data={data}
    />
  );
}
