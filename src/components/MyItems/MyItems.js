import React from 'react';
import useProducts from '../../hooks/useProducts';
import UserItem from './UserItem/UserItem';

const MyItems = () => {
    const [products, setProducts] = useProducts();
    
    return (
        <div>
            {
                products.map(product => <UserItem key={product._id} product = {product}></UserItem>)
            }
        </div>
    );
};

export default MyItems;