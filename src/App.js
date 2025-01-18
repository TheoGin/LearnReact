import React from "react";

const three = "three";
const arr = [
  (<div key={11}>123</div>),
  (<p key={12}>456</p>),
  (<span key={13}>789</span>),
]

const stuInfo = [
  {id: 1, name: '张三', age: 18},
  {id: 2, name: '李四', age: 19},
  {id: 3, name: '王五', age: 20},
]

// 类似于vue中的v-for，要有key
const arr2 = stuInfo.map( item => {
  return (<div key={item.id}>姓名：{item.name}, 年龄：{item.age}</div>)
})
/*
[
    {
        "type": "div",
        "key": "1",
        "props": {
            "children": [
                "姓名：",
                "张三",
                ", 年龄：",
                18
            ]
        },
        "_owner": null,
        "_store": {}
    },
    {
        "type": "div",
        "key": "2",
        "props": {
            "children": [
                "姓名：",
                "李四",
                ", 年龄：",
                19
            ]
        },
        "_owner": null,
        "_store": {}
    },
    {
        "type": "div",
        "key": "3",
        "props": {
            "children": [
                "姓名：",
                "王五",
                ", 年龄：",
                20
            ]
        },
        "_owner": null,
        "_store": {}
    }
]
*/
// console.log(arr2)

const element1 = (
  <h1 className="compare">
    JSX  的本质其实就是 React.createElement 方法的一种语法糖。
  </h1>
)
console.log('element1', element1) // element1 {$$typeof: Symbol(react.transitional.element), type: 'h1', key: null, props: {…}, _owner: null, …}
const element2 = React.createElement(
  'h1',
  {
    className: 'compare',
  },
  "JSX  的本质其实就是 React.createElement 方法的一种语法糖。"
)

// React.createElement函数返回的是虚拟DOM对象
console.log('element2', element2) // element2 {$$typeof: Symbol(react.transitional.element), type: 'h1', key: null, props: {…}, _owner: null, …}

const ele = (
  // 1. 根元素只能有一个 <></>空元素，不会添加新元素
  <>
    <ul>
      <li id="one">1</li>
      {/* 2. JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中 */}
      <li id="two">{2 + 2}</li>
      {/* 3. 属性值指定为字符串字面量，或者在属性值中插入一个 JavaScript 表达式 */}
      <li id={three}>3</li>
    </ul>

    {/* 4. style 对应样式对象，class  要写作 className */}
    <ul
      style={{
        color: "red",
        fontSize: '30px'
      }}
      className="ul-container"
    >
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    {/* 5. 注释需要写在花括号 */}

    {/* 6. JSX 允许在模板中插入数组，数组会自动展开所有成员 */}
    {arr}
    {arr2}

    {element1}
    {/* JSX 是一种 JavaScript 的语法扩展，Babel  会把 JSX 转译成一个名为 React.createElement 函数调用。 */}
    {element2}
  </>
);

function App() {
  return ele;
}

export default App;
