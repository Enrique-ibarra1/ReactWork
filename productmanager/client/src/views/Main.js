import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect( ()=> {
        axios.get("http://localhost:8000/api/product")
        .then(res =>{
            setProducts(res.data);
            setLoaded(true);
        });
    }, [])

    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={products}/>}
        </div>
    )
}
export default Main;