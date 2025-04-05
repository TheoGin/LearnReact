import React from 'react';

function Button(props) {
    return (
        // 通过 props.children ，可以实现类似于 Vue 中插槽的功能
        <button>{ props.children }</button>
    );
}

export default Button;