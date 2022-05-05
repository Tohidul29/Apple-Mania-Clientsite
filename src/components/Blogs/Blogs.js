import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto mt-5'>
        <h2 className='text-center my-4'>Simple Questions & Answers <FontAwesomeIcon icon={faBook}></FontAwesomeIcon></h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between JavaScript and Nodejs</Accordion.Header>
                    <Accordion.Body>
                        <p><b>JavaScript:</b> It is a normal programming language which one have the ability to runs in any web browser JS engine. We can call it as a heartbeat of any web application. JavaScript is mainly used for the client side activities. JavaScript can run in any engine like spider monkey of Firefox, V8 of Google Chrome, JavaScript Core of Safari. JavaScript basically follow the standard programming language.</p>
                        <p><b>Nodejs:</b> We can call nodejs is an interpreter or running environment for a JS programming language can able to hold many excesses. It have libraries can make the JavaScript programming better use. The purpose of using NodeJS for the server side and operating system activities. NodeJS only support the V8 engine of Google Chrome. NodeJS is written by a famous programming language C++.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Difference between SQL and NoSQL Database</Accordion.Header>
                    <Accordion.Body>
                        <p><b>SQL:</b> SQL databases are scalable in vertically. SQL databases are table-based database. SQL databases are relational. We can use PHPMyAdmin to make SQL databases.</p>
                        <p><b>NoSQL:</b> NoSQL databases are scalable in horizontally. NoSQL databases are mainly document typed or key-value typed. NoSQL databases are non-relational. We can use famous MongoDB to make NoSQL databases.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the purpose of JWT and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>JWT (JSON Web Token) is an open standard that allows two parties: a client and a server: to communicate security information. JSON items, containing a set of claims, are encoded in each JWT. JWT use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;