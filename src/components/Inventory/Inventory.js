import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    //product delete:
    const handleProductDelete = id => {
        const confirm = window.confirm('Are you sure to Delete this product?');
        if (confirm) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const restProducts = products.filter(product => product._id !== id);
                setProducts(restProducts);
            })
        }
    }
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
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        products.map(product => <tr key={product._id}>
                            <td>{product.name}</td>
                            <td className='text-center'><img className='rounded' width={100} height={100} src={product.img} alt="" /></td>
                            <td>{product.description}</td>
                            <td>{product.supplier}</td>
                            <td>${product.price}</td>
                            <td>{product.quantity} pieces</td>
                            <td><Button><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button></td>
                            <td><Button onClick={() => handleProductDelete(product._id)} className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;