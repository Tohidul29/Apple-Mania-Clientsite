import React from 'react';
import '../AddProduct/AddProduct.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
            console.log(output);
        })
    };

    return (
        <div className='w-50 mx-auto form-design mt-5'>
            <h2 className='head-style text-light'>Please added a product you want to stock <FontAwesomeIcon icon={faGift}></FontAwesomeIcon></h2>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input placeholder='Product Name' {...register("name", {required: true})}/>
                <input placeholder='Product Image URL' {...register("img", {required: true})} />
                <textarea placeholder='Product Description' {...register("description", {required: true})} />
                <input placeholder='Product Price' {...register("price", {required: true})} />
                <input placeholder='Product Quantity' {...register("quantity", {required: true})} />
                <input placeholder='Supplier Name' {...register("supplier", {required: true})} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className='button' type="submit" value='Add Product'/>
            </form>

        </div>
    );
};

export default AddProduct;