import React from 'react';
import axios from 'axios';

const DeleteButton = ({productId, successCallback}) => {
    // const {productId, successCallback} = props;
    const deleteProduct = () => {
        console.log(productId);
        axios.delete(`http://localhost:8000/api/product/${productId}`)
            .then( res => {
                successCallback();
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton;