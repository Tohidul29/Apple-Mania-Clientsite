import React from 'react';
import useProducts from '../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import Product from './Product/Product';
import { Button } from 'react-bootstrap';
import '../Products/Products.css'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Products = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [products, setProducts] = useProducts();
    const productSlicing = products.slice(0, 6);

    const handleManageButton = event =>{
        if(user){
            navigate('/inventory');
        }
        else{
            navigate('/login');
        }
    }
    return (
        <div>
            <h2 className='header-text text-center mt-5'>Stock Products <FontAwesomeIcon icon={faShop}></FontAwesomeIcon></h2>
            <div className='row container mx-auto my-4'>
                {
                    productSlicing.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </div>
            <div className='text-center my-5'>
                <Button className='btn-lg button-style' onClick={handleManageButton}>Manage All Products</Button>
            </div>

        </div>
    );
};

export default Products;