import React from "react";

// 根组件：

// // 1、函数组件
// function App() {
//   function handleClick(e) {
//     console.log(e)
//     // 访问原生事件对象的方式
//     console.log(e.nativeEvent)
//   }

//   function handleNavigateTo(e) {
//     // 在 React 中无法通过 return false 来阻止默认行为，所以只有使用 e.preventDefault() 的方式来阻止默认行为。
//     // return false;

//     e.preventDefault();
//   }

//   return (
//     <>
//       <a href="https://www.baidu.com" onClick={handleNavigateTo}>跳转到百度</a>
//       <button onClick={handleClick}>按钮</button>
//     </>
//   );
// }

// 2、类组件
class App extends React.Component {

  constructor() {
    // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super()
    // 3. 使用 bind 方法来强制绑定 this 的指向
    this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   // undefined
  //   console.log(this);
  // }
  // 解决上面undefined问题
  // 1. 将事件处理函数修改为箭头函数
  // handleClick = () => {
  //   console.log(this);
  // }
  handleClick() {
    console.log(this);
  }

  // 必须实现的方法
  render() {
    return (
      // <button onClick={ this.handleClick }>按钮</button>
      // 2. 将事件绑定修改为箭头函数（注：在箭头里要调用要加上 ()
      <button onClick={() => this.handleClick()}>按钮</button>
    );
  }
}

export default App;
