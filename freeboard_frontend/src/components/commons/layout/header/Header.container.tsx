import HeaderUI from "./Header.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FETCH_USER_LOGED_IN } from "./Header.queries";
import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function Header() {
  const [weatherUrl, setWeatherUrl] = useState("");
  const [cityNmae, setCityName] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [isloggedin, setIsLoggedin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    async function fetchWeather() {
      const result: any = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&APPID=5eb310782345882f568bd1492c938cab"
      );
      setWeatherUrl(result);
      console.log(result);
      setCityName(result.data.name);
      setWeatherMain(result.data.weather[0].main);
      setTemp(result.data.main.temp);
      setWeather(result.data.weather[0].description);
    }

    fetchWeather();
  }, []);

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  function getTemp(temp: any) {
    return (temp - 273.15).toFixed(2);
  }
  function MoveLogin() {
    router.push("/boards/login");
  }
  function MoveSignup() {
    router.push("/boards/signup");
  }

  return (
    <>
      <HeaderUI
        getTemp={getTemp}
        weatherMain={weatherMain}
        temp={temp}
        cityName={cityNmae}
        MoveLogin={MoveLogin}
        MoveSignup={MoveSignup}
        data={data}
      />
    </>
  );
}
