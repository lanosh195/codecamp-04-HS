import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_BEST } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export default function MarketList() {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: { page: startPage },
  });

  const { data: fetchBest } = useQuery(FETCH_USEDITEMS_BEST);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
    console.log(data.fetchUseditems);
  };

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  const onErrorImg = (event: any) => {
    (event.target as any).style = "display: none;";
  };
  return (
    <MarketListUI
      fetchBest={fetchBest}
      data={data}
      // refetch={refetch}
      onLoadMore={onLoadMore}
      keyword={keyword}
      startPage={startPage}
      setStartPage={setStartPage}
      onChnageKeyword={onChangeKeyword}
      onErrorImg={onErrorImg}
    />
  );
}
