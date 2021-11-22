import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from "next/router";

interface IState {
  count: number;
}

export default class MyLifecyclePage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
  }

  componentDidUpdate() {
    console.log("수정됨!!!");
  }

  componentWillUnmount() {
    console.log("잘가요~~");
  }

  onClickCounter = () => {
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}> 카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <MyComponent count={this.state.count}></MyComponent>
        {/* <button onClick={this.onClickCounter.bind(this)}> 카운트 올리기!!!</button> */}
      </>
    );
  }
}

//setState =Component에 내장되어 있음
//class안에 있는 애들 state , onClickCounter, render 를 사용할 때 this. 을 써줘야함
//  함수형 처럼 못씀
