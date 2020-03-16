import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] =useState("");
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Product Title:</label>
                <input type="text" onChange= {(e) =>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Product Description:</label>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type = "submit"/>
        </form>
    )
}

export default ProductForm;