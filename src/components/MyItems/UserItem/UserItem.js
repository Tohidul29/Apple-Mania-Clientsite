import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import auth from '../../../firebase.init';

const UserItem = ({ product }) => {
    const { name, img, price, description, supplier, quantity, email } = product;
    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    if (userEmail === email) {
        return (
            <div>
                <div className='bg-dark w-75 text-light py-3 mt-3 mx-auto rounded-2'>
                    <h2 className='text-center my-3'>UserName: {user.displayName}</h2>
                    <h4 className='text-center my-2'>UserEmail: {user.email}</h4>
                </div>
                <Table className='overflow-scroll w-75 mx-auto mt-5' striped bordered hover variant="dark">
                    <thead>
                        <tr className='text-center'>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Description</th>
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
                                <td>{supplier}</td>
                                <td>${price}</td>
                                <td>{quantity} pieces</td>
                                <td><Button className='btn-danger'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button></td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
};

export default UserItem;