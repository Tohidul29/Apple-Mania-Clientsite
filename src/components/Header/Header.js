import { signOut } from 'firebase/auth';
import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../img/Logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../Header/Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (
        <Navbar className='bg-color' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='d-flex' as={Link} to='/'>
                    <img className='me-2 rounded-circle' src={Logo} alt="" width={30} height={30} />
                    Apple-Mania
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/manageinventory'>Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/addProduct'>Add Product</Nav.Link>
                        <Nav>
                            {
                                user?
                                <Nav.Link as={Link} to='/myitems'>My Items</Nav.Link>
                                :
                                <Nav className='d-none'></Nav>
                            }
                        </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav>
                            {
                                user ?

                                    <Button className='btn btn-warning' onClick={handleLogout}>Logout</Button>
                                    :
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                <Badge bg="info" className='text-center my-auto ms-3 mt-3' title={user.email}><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {user.displayName}</Badge>
                                :
                                <Badge bg="info" className='text-center my-auto ms-3'>No user logged in</Badge>
                            }
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;