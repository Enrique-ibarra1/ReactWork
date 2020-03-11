import React from 'react';
const Planet = ({query}) => {
    return (
        <div>
            {
                query === null ? <p>...loading</p> : 
                <div>
                    <h2>{query.name}</h2>
                    <h4>Climate: {query.climate}, it rains wookies</h4>
                    <h5>Terrain: {query.terrain}, many wookies</h5>
                    <h6>Population: {query.population}</h6>
                    <p>Gravity: {query.gravity}</p>
                </div>
            }
        </div>
    )
}
export default Planet;