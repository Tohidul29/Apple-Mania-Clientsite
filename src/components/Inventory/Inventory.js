import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='w-75 mx-auto mt-4'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className='text-center'>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Supplier</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Delivered</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        products.map(product => <tr>
                            <td>{product.name}</td>
                            <td className='text-center'><img className='rounded' width={100} height={100} src={product.img} alt="" /></td>
                            <td>{product.description}</td>
                            <td>{product.supplier}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity} pieces</td>
                            <td><Button><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button></td>
                            <td><Button className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                            <td><Button className='btn-warning'><FontAwesomeIcon icon={faArrowAltCircleUp}></FontAwesomeIcon></Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;