import React from "react";

// 根组件：

// 1、函数组件
function App() {
  function handleClick(e) {
    console.log(e)
    // 访问原生事件对象的方式
    console.log(e.nativeEvent)
  }

  function handleNavigateTo(e) {
    // 在 React 中无法通过 return false 来阻止默认行为，所以只有使用 e.preventDefault() 的方式来阻止默认行为。
    // return false;

    e.preventDefault();
  }

  return (
    <>
      <a href="https://www.baidu.com" onClick={handleNavigateTo}>跳转到百度</a>
      <button onClick={handleClick}>按钮</button>
    </>
  );
}

// 2、类组件
// class App extends React.Component {
//   // 必须实现的方法
//   render() {
//     return (
//       <div>abcd</div>
//     );
//   }
// }

export default App;
