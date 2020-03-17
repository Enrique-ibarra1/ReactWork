import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const ShowProduct = ({id}) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [id]);
    

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price : {product.price}</h3>
            <h5>Description:</h5>
            <p>
                {product.description}
            </p>
            <Link to={`/product/${id}/edit`}>Edit</Link>
        </div>
        
    )
}
export default ShowProduct