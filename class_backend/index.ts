// console.log("Hello world!!!");
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3307,
  //@ts-ignore
  entities: [__dirname + "/*.mysql.ts"], //현재주소 __dirname / *모든파일 mysql로 끝나는.
  logging: true,
  synchronize: true,
})
  .then(() => {
    //연결 성공 시 실행하기
    console.log("연결 완료");
  })
  .catch((error) => {
    //연결 실패 시 실행하기
    console.log(error);
  });
