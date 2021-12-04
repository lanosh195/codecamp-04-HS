import ProductRegitserUI from "../register/productregister.presenter";

import { FormValues } from "./productregister.types";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "./productregister.queries";
import { useRouter } from "next/router";

export default function ProductRegister() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();

  async function onClickSubmit(data: FormValues) {
    if (data.name && data.remarks && data.contents && data.price) {
      const result = await createProduct({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      console.log(result.data);
      router.push(`/boards/market/${result.data.createUseditem._id}`);
    }
  }

  return <ProductRegitserUI onClickSubmit={onClickSubmit} />;
}
