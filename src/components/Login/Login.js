import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import '../Login/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const navigateHome = event => {
        navigate('/home');
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    if (user) {
        navigateHome('/home');
    }

    let errorMsg;

    if (error) {
        errorMsg =
            <div className='text-danger mt-2'>
                <p>Error: {error.message}</p>
            </div>
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset password Email sent');
        }
        else {
            toast('Please Enter your Email on the input field');
        }
    }

    return (
        <div className='mt-4 w-50 mx-auto p-3 form-design rounded-3'>
            <h2 className='text-center my-4'>Apple-Mania Admin Login <FontAwesomeIcon icon={faLock}></FontAwesomeIcon></h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='button-design' variant="light" type="submit">
                    Login
                </Button>
                {
                    errorMsg
                }
            </Form>
            <ToastContainer></ToastContainer>
            <div className='mt-3'>
                <p>New to Apple-Mania Admin? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register</Link> </p>
                <p>Forget Password? <button className='text-primary text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;