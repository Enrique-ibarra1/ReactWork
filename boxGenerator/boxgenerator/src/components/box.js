import React from 'react';

const Box = ({color, removeBox, idx}) => {
    const style = {
        height: '200px',
        width: '200px',
        backgroundColor: color
    }
    return (
        <div style={style} className="col-2" onClick={(e) => removeBox(e, idx)}></div>
    )
}
export default Box;