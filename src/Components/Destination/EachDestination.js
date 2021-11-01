import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import "./EachDestination.css"
const EachDestination = (params) => {
    const {index}=params;
    // console.log(params);
    const { name,_id, address, price,duration, review, picture, about } = params.destination;
    return (
        <div>
            <Col>
                <Card  style={{ width: '18rem' }}>
                    <div className=''><div><Card.Img variant="top" src={picture} style={{ width: "285px", height: "150px" }} fluid /></div>
                        <div className=""><Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <div className="d-flex justify-content-between fw-bold text-secondary">
                            <small><i className="fas fa-map-marker-alt"></i> {address}</small>
                            <small>{duration}</small>
                            </div>
                            <Card.Text>
                                <small className="text-secondary">{about}</small> <br />
                                <small className="fw-bold text-secondary">Price:  <span>{price}</span></small>
                            </Card.Text>
                            
                            <Link to={`/destination/${_id}/${index}`}><Button variant="info" className="w-100">Details</Button></Link>
                        </Card.Body></div></div>

                </Card>
            </Col>
        </div>

    );
};

export default EachDestination;