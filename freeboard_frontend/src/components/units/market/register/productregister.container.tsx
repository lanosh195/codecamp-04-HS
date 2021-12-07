import ProductRegitserUI from "../register/productregister.presenter";
import { useState, useEffect } from "react";
import { FormValues } from "./productregister.types";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./productregister.queries";
import { useRouter } from "next/router";

export default function ProductRegister(props) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  async function onClickSubmit(data: FormValues) {
    if (data.name && data.remarks && data.contents && data.price) {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: fileUrls,
          },
        },
      });
      console.log(result.data);
      router.push(`/boards/market/${result.data.createUseditem._id}`);
    }
  }
  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <ProductRegitserUI
      onClickSubmit={onClickSubmit}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
