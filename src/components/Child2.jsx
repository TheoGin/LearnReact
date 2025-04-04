import React from 'react'

class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            {/* 如果是类组件，则需要在 constructor 中将 props 通过 super 传递给父类，然后通过 this.props 的方式来获取传入的值 */}
                <div>姓名：{ this.props.stuInfo.name }</div>
                <div>年龄：{ this.props.stuInfo.age }</div>
            </>
        );
    }
}

export default Child2;