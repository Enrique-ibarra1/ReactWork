import React, {useState} from 'react';

const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] =useState(initialTitle);
    const[price, setPrice] = useState(initialPrice);
    const[description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //call back that goes to our logic in main.js
        onSubmitProp({title, price, description})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Product Title:</label>
                <input type="text" 
                placeholder={initialTitle}
                onChange= {(e) =>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label>
                <input type="number" 
                placeholder={initialPrice}
                onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Product Description:</label>
                <input type="text" 
                placeholder={initialDescription}
                onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type = "submit"/>
        </form>
    )
}

export default ProductForm;