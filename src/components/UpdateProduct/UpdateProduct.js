import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='mt-4'>
            <Card className='mx-auto shadow-lg bg-black text-light' style={{ width: '25rem' }}>
                <Card.Img className='p-4 rounded-3' variant="top" src={product.img} />
                <Card.Body>
                    <h3 className='text-center'>Product: {product.name}</h3>
                    <h4 className='text-center'>Price: ${product.price}</h4>
                    <Card.Text className='text-light text-center'>
                        {product.description}
                    </Card.Text>
                    <Card.Title className='text-center'>Quantity: {product.quantity}</Card.Title>
                    <Card.Title className='text-center'>Supplier: {product.supplier}</Card.Title>
                    <div className='d-flex mt-3 justify-content-around'>
                        <input type="text" placeholder='Add Quantity'/> <Button>Add</Button>
                    </div>
                    <Button className='d-block mx-auto mt-3' variant="warning">Delivered</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdateProduct;