import React from "react";
import PropTypes from "prop-types";

// 如果是函数组件，props  作为函数的一个参数传入
function Child1({
  stuInfo = {
    name: "王五",
    age: 38,
  },
  str,
  num,
  isTrue,
  handleChildToParent
}) {

    function handleTransmit() {
        handleChildToParent(132)
    }
  return (
    <>
      <div>姓名：{stuInfo.name}</div>
      <div>年龄：{stuInfo.age}</div>
      <div>字符串: {str}</div>
      <div>数字: {num}</div>
      <div>布尔值: {isTrue ? "true" : "false"}</div>
      <button onClick={handleTransmit}>触发子组件给父组件传递数据</button>
      {/* <div>姓名：{props.stuInfo.name}</div>
      <div>年龄：{props.stuInfo.age}</div>
      <div>字符串: {props.str}</div>
      <div>数字: {props.num}</div>
      <div>布尔值: {props.isTrue ? "true" : "false"}</div> */}
    </>
  );
}

// // 函数组件设置默认的 defaultProps 属性值——》已弃用！！！
// Child1.defaultProps = {
//   stuInfo: {
//     name: "李四",
//     age: 38,
//   },
// };

Child1.propTypes = {
    num: PropTypes.number
}

export default Child1;
