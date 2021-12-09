import ProductRegitserUI from "../register/productregister.presenter";
import { useState, useEffect } from "react";
import { FormValues } from "./productregister.types";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, UPDATE_USEDITEM } from "./productregister.queries";
import { useRouter } from "next/router";

export default function ProductRegister(props: any) {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const router = useRouter();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  async function onClickSubmit(data: FormValues) {
    try {
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
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      error instanceof Error && alert(error.message);
    }
  }

  async function onClickUpdate(data: FormValues) {
    const updateUseditemInput = {
      name: data.name,
      remarks: data.remarks,
      contents: data.contents,
      price: data.price,
    };

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.useditemId,
          updateUseditemInput,
        },
      });
      router.push(`/market/${router.query.useditemId}`);
      console.log(result);
    } catch (error) {
      error instanceof Error && alert(error.message);
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
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
