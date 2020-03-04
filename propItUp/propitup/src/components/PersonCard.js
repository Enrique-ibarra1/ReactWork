import React from 'react';
const PersonCard = ({firstName, lastName, age, hairColor, idx, handleClick}) => {
    const style = {
        border: '1px solid black'
    }
    return(
        <div style={style} className="card col-5 mx-auto">
            <h1>{lastName}, {firstName}</h1>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button className="btn btn-dark col-3 mx-auto" onClick={(e) => handleClick(e,idx)}>Birthday Button</button>
        </div>
    );
}
export default PersonCard;