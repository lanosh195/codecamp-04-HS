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
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";

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

  function onCLickMoveToUpdate() {
    router.push(`/boards/market${router.query.useditemId}/edit`);
  }
  function onClickMoveToList() {
    router.push("/boards/market");
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("상품이 삭제되었습니다.");
      router.push("/boards/market");
    } catch (error) {
      error instanceof Error && console.log(error.message);
    }
  }

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
  }

  return (
    <MarketDetailUI
      onClickDelete={onClickDelete}
      onCLickMoveToUpdate={onCLickMoveToUpdate}
      onClickMoveToList={onClickMoveToList}
      onClickBasket={onClickBasket}
      data={data}
    />
  );
}
