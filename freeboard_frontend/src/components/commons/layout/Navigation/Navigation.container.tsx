import { useRouter } from "next/router";
import NavigationUI from "./Navigation.presenter";

export default function Navigation() {
  const router = useRouter();

  function onClickMoveToBoard() {
    router.push("/boards");
  }
  return <NavigationUI onClickMoveToBoard={onClickMoveToBoard} />;
}
