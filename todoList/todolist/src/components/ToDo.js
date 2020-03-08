import React from 'react';

const ToDo = ({todo, handleCheck, handleDestroy, idx}) => {
    const style = {
        textDecoration: "line-through"
    }
    return (
        <div>
            <p style={todo.isChecked ? style :null}>{todo.task} </p>
            <input type="checkbox" checked={todo.isChecked} onClick={(e) => handleCheck(e, idx)} />
            <button className="btn btn-danger btn-small" disabled={todo.isChecked ? false : true} onClick={(e) => handleDestroy(e, idx)} value="Delete">x</button>
        </div>
    )
}
export default ToDo;