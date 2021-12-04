import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 해주세요");
      router.push("/23-04-login");
    } else {
      setIsLoading(false);
    }
  }, []);

  return {
    //   객체로 넘겨줘야 한다 but, isLoading: isLoading 키 값이 같으면 생략가능
    isLoading,
  };
}
