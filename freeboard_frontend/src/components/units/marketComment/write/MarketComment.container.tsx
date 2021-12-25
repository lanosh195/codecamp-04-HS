import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { UPDATE_QUESTION } from "../list/MarketCommentList.queries";
import MarketCommentUI from "./MarketComment.presenter";
import { CREATE_USEDITEM_QUESTION } from "./MarketComment.queries";

export default function MarketComment() {
  const [createMarketQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [updateMarketQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_QUESTION);
  return <MarketCommentUI />;
}
