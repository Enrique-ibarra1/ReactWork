import React from 'react';
const Films = ({query}) => {
    return (    
        <div>
            {
                query === null ? <p>...loading</p> : 
                <div>
                    <h1>Episode {query.episode_id}: {query.title}</h1>
                    <h4>Directed by {query.director}</h4>
                    <p>{query.opening_crawl}... Also Yoda is in this.</p>
                    <h5>Released {query.release_date}</h5>
                </div>
            }
        </div>
    )
}
export default Films;