import React from 'react';
import {navigate} from '@reach/router';
import Hello from './Hello.js'
const Number = (props) => {
    
    if(isNaN(+props.id) ===false){
        return(
            <div>
                <h1>The number is:{props.id}</h1>
            </div>
        )
    }else if (isNaN(+props.id) === true){
        // navigate(`/hello/${props.id}`);
        return(
            <div>
                <h1>The word is {props.id}</h1>
            </div>
            // <Hello path={`/hello/${props.id}`}/>
        )
    }
    
    
}
export default Number;