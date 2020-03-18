import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const NewAuthor = () => {
    const [errors, setErrors] = useState([]);
    const createAuthor = author =>{
        axios.post('http://localhost:8000/api/author', author)
            .then(res =>{
                navigate('/');
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to={`/`}>Home</Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
        </div>
    )
}

export default NewAuthor;