import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component) => (props) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 해주세요");
      router.push("/boards/login");
    }
  }, []);

  return <Component {...props} />;
};
