import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect( ()=>{
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = (productId) => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            {props.product.map((product, idx) => {
                return(
                    <div>
                        <Link key={idx} index={product._id} to={`/product/${product._id}`}>{product.title}</Link>
                        |
                        <DeleteButton productId={product._id}
                        successCallback={() => removeFromDom(product._id)}/>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;