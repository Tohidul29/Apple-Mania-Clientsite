import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo/logo.png';
import '../Header/Header.css';

const Header = () => {
    return (
        <Navbar className='bg-color' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='d-flex' as={Link} to='/'>
                    <img className='me-2 rounded-circle' src={Logo} alt="" width={30} height={30}/>
                    Apple-Mania
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;