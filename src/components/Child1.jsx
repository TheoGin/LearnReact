import React from 'react';

// 如果是函数组件，props  作为函数的一个参数传入
function Child1(props) {
    return (
        <>
            <div>姓名：{ props.stuInfo.name }</div>
            <div>年龄：{ props.stuInfo.age }</div>
            <div>字符串: { props.str }</div>
            <div>数字: { props.num }</div>
            <div>布尔值: { props.isTrue ? 'true' : 'false' }</div>
        </>
    );
}

export default Child1;