import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';


const UpdateProduct = ({id}) =>{
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, [id])
    const updateProduct = (product) => {
        axios.put(`http://localhost:8000/api/product/${id}`, product)
    }
    return (
        <div>
            {loaded && (
                <>
                <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                intitalDescription={product.description}/>
                <DeleteButton productId={product._id}
                successCallback={() => navigate("/")}/>
                </>
            )}
        </div>
    )
}
export default UpdateProduct;