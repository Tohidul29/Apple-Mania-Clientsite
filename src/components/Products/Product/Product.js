import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Product = ({product}) => {
    const {img, name, description, price, supplier, quantity} = product;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4 text-center mx-auto'>
            <Card className='border-1 shadow' style={{ width: '21rem' }}>
                <Card.Img variant="top" src={img} width={100} height={250} />
                <Card.Body className='card-text'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title className='text-primary'>Price: ${price}</Card.Title>
                    <Card.Title className='text-muted'>Supplier: {supplier}</Card.Title>
                    <Card.Text>
                        {description.slice(0,70)}...
                    </Card.Text>
                    <Card.Title className='text-info'>Quantity: {quantity} Pieces</Card.Title>
                    <Button className='btn-dark my-2'>Update <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;