import React from 'react';
const Hello = (props) => {
    const style = {
        backgroundColor: props.bg,
        color: props.text
    }
    return(
        <div>
            <h1 style={style}>The word is: {props.word}</h1>
        </div>
    )
}
export default Hello;