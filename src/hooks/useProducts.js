import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
};

export default useProducts;