import React from "react";

// 类组件
class App extends React.Component {
  constructor() {
    super();
    // 1. 在constructor中，设置组件自身的数据状态
    this.state = {
      num: 1
    }
    // this.timer = setInterval(() => {
    //   // 如果改变状态的代码不处于某个 HTML 元素的事件中，则setState是同步的
    //   this.setState({
    //     num: this.state.num + 1
    //   })
    //   console.log(this.state.num, 'num  ')
    //   if(this.state.num === 10) {
    //     clearInterval(this.timer);
    //   }
    // }, 1000)
  }

  // // 2. 直接在类中，设置组件自身的数据状态
  // state = {
  //   num: 1
  // }

  // 如果改变状态的代码处于某个 HTML 元素的事件中，则setState是异步的
  handleClick = () => {
    // // 一. 如果在事件处理函数里面，想拿到 setState 执行后的数据，可以提前使用一个变量来存储计算结果
    // let newNum = this.state.num + 1

    // // // 不直接修改状态。例如，这不会重新渲染组件：
    // // this.state.num++ // Wrong
    // // 改用 ：setState()
    // this.setState({
    //   num: newNum
    // }) 
    // // this.setState({
    // //   num: this.state.num + 1
    // // })
    // // this.setState({
    // //   num: this.state.num + 1
    // // })
    // // 只会加一次，而不是加3次，因为 React 可以将多个调用批处理到单个更新中以提高性能。setState()
    // console.log(newNum, 'num')

    // // 二、使用 setState 的第二个参数，它是一个函数，这个函数会在 state 更新后被调用。
    // this.setState({
    //   num: this.state.num + 1
    // }, () => {
    //   console.log(this.state.num, 'num')
    // })
    
    // 3. 如果要使用改变之后的状态，需要使用回调函数（setState  的第二个参数），但这样会产生回调地狱！！
    // this.setState({
    //   num: this.state.num + 1
    // }, () => {
    //   this.setState({
    //     num: this.state.num + 1
    //   }, () => {
    //     this.setState({
    //       num: this.state.num + 1
    //     }) 
    //   }) 
    // }) 

    // 4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState  的第一个函数）
    this.setState((lastState) => ({
      num: lastState.num + 1
    }), () => {
      console.log(this.state.num, 'num') // 易错：打印的是4，而不是2！！！因为React 会对异步的 setState 进行优化，将多次 setState 进行合并（将多次状态改变完成后，再统一对 state 进行改变，然后触发 render ）
    })
    this.setState((lastState) => ({
      num: lastState.num + 1
    }))
    this.setState((lastState) => ({
      num: lastState.num + 1
    }))
  }

  render() {
    console.log('render方法执行')
    return (
      <>
        <div>{this.state.num}</div>
        <button onClick={ this.handleClick }>+1</button>
      </>
    );
  }
}

export default App;
