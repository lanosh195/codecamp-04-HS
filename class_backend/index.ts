// console.log("Hello world!!!");
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const myTypeDefs = gql`
  input createBoardInput {
    writer: String
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: createBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      //어쩌구 저쩌구 ㅋ (데이터 베이스에서 게시물 데이터 꺼내오기)

      const result = await Board.find({ where: { deletedAt: null } });
      console.log(result);
      return result;
    },
  },

  Mutation: {
    // loginCheck: (parent:any, args:any) => {

    // },
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletedAt: new Date() });
      return "게시물이 정상적으로 삭제되었습니다.";
    },

    createBoard: async (_: any, args: any) => {
      // loginCheck(aaa:"철수")
      //어쩌구 저쩌구 (데이터 베이스에 게시물 데이터 등록하기)
      /////1번째 방법

      // await Board.insert({
      //   title: "안녕하세요. 테스트 입니다.",
      //   writer: "구짱",
      //   age: 9,
      // });
      // return "게시물 등록에 성공하였습니다";
      /////2번째 방법
      // title: args.title,
      // writer: args.writer,
      // age: args.age,
      //////3번째 방법
      await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });
      return "게시물 등록에 성공하였습니다";
    },
  },
};

const Server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

// const typeDefs = gql`
//   type Query {
//     fetchBoard: String
//   }

//   type Mutation {
//     createBoard(wirter: String, title: String, age: Int): String
//   }
// `

// const resolvers = {

// }

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// })

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

    Server.listen({ port: 4000 });
  })
  .catch((error) => {
    //연결 실패 시 실행하기
    console.log(error);
  });
