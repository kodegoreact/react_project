

import {Container, Nav, Navbar, Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import Cart from './Cart';



const Navigation = ({cart}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
            <Navbar bg="warning" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home">Sample Market</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/add">
                            Add Product
                        </Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleShow}>View Cart</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Cart Items</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart cart={cart}></Cart>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default Navigation;