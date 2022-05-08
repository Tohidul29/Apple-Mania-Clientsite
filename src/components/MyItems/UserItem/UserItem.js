import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import auth from '../../../firebase.init';
import React from 'react';

const UserItem = ({ product }) => {
    const { name, img, price, description, supplier, quantity, email } = product;
    
    const [user] = useAuthState(auth);
    const userEmail = user?.email;

    const handleDeleteButton = id =>{
        window.location.reload(false);
        const confirm = window.confirm('Are you sure to delete this item?');
        if(confirm){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }
    if (userEmail === email) {
        return (
            <div>
                <Table className='overflow-scroll w-75 mx-auto mt-5' striped bordered hover variant="dark">
                    <thead>
                        <tr className='text-center'>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>UserEmail</th>
                            <th>Supplier</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            <tr>
                                <td>{name}</td>
                                <td className='text-center'><img className='rounded' width={100} height={100} src={img} alt="" /></td>
                                <td>{description}</td>
                                <td>{email}</td>
                                <td>{supplier}</td>
                                <td>${price}</td>
                                <td>{quantity} pieces</td>
                                <td><Button onClick={()=> handleDeleteButton(product._id)} className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
};

export default UserItem;