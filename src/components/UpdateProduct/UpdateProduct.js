import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const { name, img, price, quantity, supplier, description } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const addQuantity = (event) => {
        event.preventDefault();
        let updateItemQuantity = parseFloat(quantity) + parseFloat(event.target.productQuantity.value);
        let newItem = { name, img, price, quantity: updateItemQuantity, supplier, description };
        setProduct(newItem);

        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                toast('Product quantity added successfully...');
            })
    }

    const handleDelivered = (event) => {
        event.preventDefault();
        if (quantity > 0) {
            let updateItemQuantity = parseFloat(quantity) - 1;
            let newItem = { name, img, price, quantity: updateItemQuantity, supplier, description };
            setProduct(newItem);

            fetch(`http://localhost:5000/product/${id}`, {
                method: 'PUT',
                body: JSON.stringify(newItem),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    toast('One Product Delivered Successfully...');
                })
        }
        else {
            toast('Sorry This product is not available now');
        }
    }
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
                    <Form onSubmit={addQuantity} className='d-flex mt-3 justify-content-around'>
                        <input type="text" placeholder='Add Quantity' name='productQuantity' /> <Button type='submit'>Add</Button>
                    </Form>
                    <Form onSubmit={handleDelivered}>
                        <Button type='submit' className='d-block mx-auto mt-3' variant="warning">Delivered</Button>
                    </Form>
                </Card.Body>
            </Card>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;