import MarketListUI from "./MarketList.presenter";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

export default function MarketList() {
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_USEDITEMS, {
    variables: { page: startPage },
  });
  function onChangeKeyword(value: string) {
    setKeyword(value);
  }
  return (
    <MarketListUI
      data={data}
      refetch={refetch}
      keyword={keyword}
      startPage={startPage}
      setStartPage={setStartPage}
      onChnageKeyword={onChangeKeyword}
    />
  );
}
