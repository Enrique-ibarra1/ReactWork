import React from 'react';
const Species = ({query}) => {
    return (
        <div>
            {
                query === null ? <p>...loading</p> : 
                <div>
                    <h1>{query.name}</h1>
                    <p>Classification: {query.classification}</p>
                    <h2>Designation: {query.designation}</h2>
                    <h3>Lifespan: {query.average_lifespan} days</h3>
                    <h4>Language: {query.languages}</h4>
                    <p>The {query.name} are a strange people, from (INSERT HOMEWORLD HERE). Their skin is typically {query.skin_colors}, with {query.hair_colors} hair. Their eyes are typically {query.eye_colors}, or rainbow.</p>

                </div>
            }
        </div>
    )
}
export default Species;