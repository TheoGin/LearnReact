import React from "react";

// 根组件：

// 1、函数组件
function App() {
  function handleClick(e) {
    console.log(e)
    // 访问原生事件对象的方式
    console.log(e.nativeEvent)
  }

  function handleNavigateTo(arg, e) {
    // 在 React 中无法通过 return false 来阻止默认行为，所以只有使用 e.preventDefault() 的方式来阻止默认行为。
    // return false;
    console.log(arg);

    e.preventDefault();
  }

  return (
    <>
      {/* 函数组件传参方式：要写成箭头函数 */}
      {/* handleNavigateTo(12)不能直接这样写，不然一上来就直接调用了。 */}
      <a href="https://www.baidu.com" onClick={ (e) => handleNavigateTo(12, e)}>跳转到百度</a>
      <button onClick={handleClick}>按钮</button>
    </>
  );
}

// 2、类组件
// class App extends React.Component {

//   // constructor() {
//   //   // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
//   //   super()
//   //   // 3. 使用 bind 方法来强制绑定 this 的指向
//   //   this.handleClick = this.handleClick.bind(this)
//   // }

//   // handleClick() {
//   //   // undefined
//   //   console.log(this);
//   // }
//   // 解决上面undefined问题
//   // 1. 将事件处理函数修改为箭头函数
//   // handleClick = () => {
//   //   console.log(this);
//   // }
//   handleClick(str, e) {
//     // console.log(this);
//     console.log(str, e);
//   }

//   // 必须实现的方法
//   render() {
//     return (
//       // <button onClick={ this.handleClick }>按钮</button>
//       // 2. 将事件绑定修改为箭头函数（注：在箭头里要调用要加上 ()
//       // <button onClick={() => this.handleClick()}>按钮</button>

//       // 两种传参方式
//       // 1. 通过 bind 方法在绑定 this 指向时向事件处理函数进行传参
//       <button onClick={ this.handleClick.bind(this, 123) }>按钮</button>

//       // 2. 绑定事件时，通过书写箭头函数的形式来传参
//       // <button onClick={(e) => this.handleClick("abc", e)}>按钮</button>
//     );
//   }
// }

export default App;
