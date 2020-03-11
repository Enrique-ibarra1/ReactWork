import React from 'react';
const People = ({query}) => {
    return (
        <div>
            {
                query === null ? <p>...loading</p> : 
                <div>
                    <h2>{query.name}</h2>
                    <h4>Born- {query.birth_year}</h4>
                    <p>Height: {query.height} wookies</p>
                    <p>Mass: {query.mass} jaaba the huts</p>
                    <h5>Home World: </h5>
                </div>
            }
        </div>
    )
}
export default People;