import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx) => {
                return(
                    <div>
                            <Link key={idx} index={product._id} to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;