import React from 'react';
import '../AddProduct/AddProduct.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(output =>{
            toast('Added one product successfully...');
        })
    };

    return (
        <div className='w-50 mx-auto mt-5 form-design'>
            <h2 className='head-style text-light'>Please added a product you want to stock <FontAwesomeIcon icon={faGift}></FontAwesomeIcon></h2>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input className='mb-3 mt-4' placeholder='Product Name' {...register("name", {required: true})}/>
                <input className='mb-3' placeholder='Product Image URL' {...register("img", {required: true})} />
                <textarea className='mb-3' placeholder='Product Description' {...register("description", {required: true})} />
                <input className='mb-3' placeholder='Product Price' {...register("price", {required: true})} />
                <input className='mb-3' placeholder='Product Quantity' {...register("quantity", {required: true})} />
                <input className='mb-3' value={user.displayName} {...register("supplier", {required: true})} />
                <input className='mb-3' value={user.email} readOnly {...register("mail", {required: true})} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='button' type="submit" value='Add Product'/>
                <ToastContainer></ToastContainer>
            </form>

        </div>
    );
};

export default AddProduct;