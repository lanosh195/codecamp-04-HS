import SmallCommonButton from "../../../../commons/buttons/03/SmallCommonButton";
import { Wrapper, Title, PointAmount, Input } from "./myPoint.styles";
export default function PointUI(props: any) {
  return (
    <>
      <Wrapper>
        <Title>포인트충전</Title>
        <PointAmount>
          {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString(
            "ko-KR"
          )}{" "}
          보유중
        </PointAmount>
        <Input
          onChange={props.onChangeMyPoint}
          placeholder="충천할 금액을 입력해주세요."
        />
        <SmallCommonButton name="충전하기" onClick={props.onClickPayment} />
      </Wrapper>
    </>
  );
}
