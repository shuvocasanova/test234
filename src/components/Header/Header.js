import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import logo from '../../image/logo.png';
import './Header.css';

const Header = () => {    
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <img src={logo} className="d-inline-block align-top" alt="Online Course Logo"/>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#featured-courses">Featured Courses</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search for courses..." className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;