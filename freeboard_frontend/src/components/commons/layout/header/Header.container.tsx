import HeaderUI from "./Header.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header() {
  const [weatherUrl, setWeatherUrl] = useState("");
  const [cityNmae, setCityName] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [temp, setTemp] = useState("");

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
    }

    fetchWeather();
  }, []);

  return (
    <>
      <div>
        <div>{cityNmae}</div>
        <div>{weatherMain}</div>
        <div>{temp}</div>
        <HeaderUI />
      </div>
    </>
  );
}
