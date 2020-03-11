import React from 'react';
const SearchForm = ({handleChange, handleSubmit, search, setSearch, id, setId}) => {
    // const handleSubmit = (e) => {
    //     setSearch(e.target.value);
    //     e.preventDefault();
    //     axios.get("https://swapi.co/api/people").then(response => {
    //         console.log(response);
    //     })
    // }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-group mb-3 col-3 mx-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text">Search For:</span>
                </div>
                <select name="search" className="form-control" value={search} onChange={(e)=> handleChange(e)}>
                    <option value="">--Select--</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="species">Species</option>
                    <option value="starships">Starships</option>
                    <option value="films">Films</option>
                </select>
                <input type="text" className="form-control col-2" value={id} name="id" placeholder="ID:" onChange={(e)=>handleChange(e)}></input>
                <div className="input-group-append">
                    <input type="submit" className="btn btn-primary" value="Search"/>
                </div>
            </div>
        </form>
    );
}
export default SearchForm;