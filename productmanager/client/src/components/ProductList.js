import React from 'react';
// import axios from 'axios';
import {Link} from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            removeFromDom(productId)
        })
    }
    return (
        <div>
            {props.product.map((product, idx) => {
                return(
                    <div>
                        <Link key={idx} index={product._id} to={`/product/${product._id}`}>{product.title}</Link>
                        |
                        <button key={idx} onClick={(e) =>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;