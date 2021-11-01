import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
const Menubar = () => {
    const { logOut, googleSignin, user } = UseAuth()
    return (
        <div>
            <Navbar scrolling dark expand="lg" fixed="top">
                <Container fluid>
                    

                    <Link to="/home" style={{
                        fontWeight: "bold",
                        color: "black",
                        textDecoration: "none"
                    }}><Navbar.Brand className="fw-bolder fs-3">Ghurte Jabo</Navbar.Brand></Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                        <NavLink className="m-2"
                            to="/destination"
                            style={{
                                fontWeight: "bold",
                                color: "black",
                                textDecoration: "none"
                            }}>Packages</NavLink>

                        {/* {
                            (() => {
                                if (user.email) {
                                    return (
                                        <> */}
                                            <Link className="m-2"
                                                to="/orders"
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "none"
                                                }}
                                            >My Orders</Link>
                                            <Link className="m-2"
                                                to="/manageorders"
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "none"
                                                }}>Manage All Orders</Link>
                                            <Link className="m-2"
                                                to="/addnewservice"
                                                style={{
                                                    fontWeight: "bold",
                                                    color: "black",
                                                    textDecoration: "none"
                                                }}>Add A New Service</Link>


                                        {/* </>
                                    );
                                }
                            })()
                        } */}


                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" className="fw-bold text-black">Search</Button>
                        </Form>
                    </Nav>
                    <Nav>
                        {user.email ?
                            <>
                                {/* {console.log(user.email)} */}
                                <Nav.Link className="fw-bold text-black">Hello, {user?.displayName}</Nav.Link>
                                <Nav.Link onClick={logOut} className="fw-bold text-black">Log out</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link onClick={googleSignin} className="fw-bold text-black">Log in</Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div >
    );
};

export default Menubar;