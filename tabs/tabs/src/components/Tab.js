import React from 'react';
const Tab = ({name,handleClick,idx,isSelected}) => {
    const style ={
        color : "white",
        backgroundColor: "black"
    }
    return(
        <div  style={isSelected ? style: null} onClick={(e) => handleClick(e,idx)}>
            <h1>{name}</h1>
        </div>
    )
}
export default Tab;