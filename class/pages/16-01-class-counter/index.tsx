import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}

export default class MyCounterPage extends Component {
  state = {
    count: 0,
  };

  //   onClickCounter() {
  //     console.log(this.state.count);
  //   }
  onClickCounter = () => {
    //console.log(this.state.count);
    // console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}> 카운트 올리기!!!</button>
        <MyComponent count={this.state.count}></MyComponent>
        {/* <button onClick={this.onClickCounter.bind(this)}> 카운트 올리기!!!</button> */}
      </>
    );
  }
}

//setState =Component에 내장되어 있음
//class안에 있는 애들 state , onClickCounter, render 를 사용할 때 this. 을 써줘야함
//  함수형 처럼 못씀
