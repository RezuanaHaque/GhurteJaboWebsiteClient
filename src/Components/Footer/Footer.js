import React from 'react';
import { Col, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="text-light bg-dark p-5 mt-5">
                <Row>
                    <Col>

                        <h5 className="text-warning fw-bold fs-4 mt-3">Follow us:</h5>
                        <ul>
                            <li className="text-light  fs-5 ms-3" href="/facebook"><i className="fab fa-facebook-square"></i></li>
                            <li className="text-light  fs-5 ms-3" href="/linkedin"><i className="fab fa-linkedin"></i></li>
                            <li className="text-light  fs-5 ms-3" href="/instagram"><i className="fab fa-instagram-square"></i></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-warning fw-bold fs-4 mt-3">Quick Links</h5>
                        <ul>
                            <li className="text-light text-decoration-none" href="/home">Home</li><br />
                            <li className="text-light text-decoration-none" href="/services">Services</li><br />
                            <li className="text-light  text-decoration-none" href="/aboutus">About us</li><br />
                            <li className="text-light text-decoration-none" href="/employee">Employees</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="text-warning fw-bold fs-4 mt-3">Be the first to know about new offers</h5>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" className="text-light">
                                Sign up
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default Footer;