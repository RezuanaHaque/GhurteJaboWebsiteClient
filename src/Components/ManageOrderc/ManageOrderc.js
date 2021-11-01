
import React, { useEffect, useState } from 'react';
import { Card, Col, Container,  Row } from 'react-bootstrap';



const ManageOrderc = () => {
    const [manageOrderList, setmanageOrderList] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/manageOrder")
            .then(res => res.json())
            .then(data => setmanageOrderList(data))
    }, [])
    console.log(manageOrderList);
    return (
        <div style={{ marginTop: '100px' }} >

            <Container>
                <h1 className="text-center m-4">Destinations</h1>
                <Row xs={12} md={4} lg={2} className="g-3">
                    {
                        manageOrderList.map(place =>
                            <Col>
                                <Card className="card">
                                    <div className="d-flex"><div><Card.Img variant="top" src={place.picture} style={{ width: "335px", height: "235px" }} fluid /></div>
                                        <div className="w-50"><Card.Body>
                                            <Card.Title>{place.name}</Card.Title>
                                            <div className="d-flex justify-content-between fw-bold text-secondary">
                                                <small><i className="fas fa-map-marker-alt"></i> {place.address}</small>
                                                <small>{place.duration}</small>
                                            </div>
                                            <Card.Text>
                                                <small className="text-secondary">{place.about}</small> <br />
                                                <small className="fw-bold text-secondary">Price:  <span>{place.price}</span></small>
                                                <small className="fw-bold text-secondary">Booked By: <span>{place.email}</span></small>

                                            </Card.Text>

                                            {/* <Button onClick={() => handleDel(place._id)} variant="info" className="w-100">Delete</Button> */}
                                        </Card.Body></div></div>

                                </Card>
                            </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default ManageOrderc;