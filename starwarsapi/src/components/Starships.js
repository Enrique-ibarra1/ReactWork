import React from 'react';
const Starship = ({query}) => {
    return (
        <div>
            {
                query === null ? <p>...loading</p> : 
                <div>
                    <h1>{query.name}</h1>
                    <h2>Made by {query.manufacturer}</h2>
                    <h3>Starship Class: {query.starship_class}</h3>
                    <h4>With a  crew of {query.crew} jedis, This {query.name} (slaps rooftop) can carry {query.passengers} wookies into battle.</h4>
                    <p>Max speed: {query.max_atmosphering_speed} light years per minute</p>

                </div>
            }
        </div>
    )
}
export default Starship;