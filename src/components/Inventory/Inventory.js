import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();

    const addNewItem = event => {
        navigate('/addProduct');
    }

    const editProduct = (id) => {
        navigate(`/inventory/${id}`);
    }
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
                    toast('One product delete from your inventory');
                })
        }
    }
    return (
        <div className='w-75 mx-auto mt-4'>
            <Table className='overflow-scroll' striped bordered hover variant="dark">
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
                            <td><Button onClick={() => editProduct(product._id)}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></Button></td>
                            <td><Button onClick={() => handleProductDelete(product._id)} className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                        </tr>)
                    }
                </tbody>
            </Table>
            <ToastContainer></ToastContainer>
            <div className='mx-auto text-center my-4'>
                <Button className='btn btn-lg btn-dark' onClick={addNewItem}>Add New Product</Button>
            </div>
        </div>
    );
};

export default Inventory;