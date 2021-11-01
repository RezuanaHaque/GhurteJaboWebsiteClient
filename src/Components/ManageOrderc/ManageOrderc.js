
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const ManageOrderc = () => {
    const { destinationID } = useParams()
    const [manageOrderList, setmanageOrderList] = useState([])
    // const [OrderList, setOrderList] = useState([])
    useEffect(() => {
        fetch("https://floating-spire-72741.herokuapp.com/manageOrder")
            .then(res => res.json())
            .then(data => setmanageOrderList(data))
    }, [])

    const handleDel = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://floating-spire-72741.herokuapp.com/manageOrder/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged==true) {
                        alert('deleted successfully');
                        const remainingOrders = manageOrderList.filter(order => order._id !== id);
                        setmanageOrderList(remainingOrders);
                    }
                });
        }

    }

    return (
        <div style={{ marginTop: '100px' }} >

            <Container>
                <h1 className="text-center m-4">All Orders</h1>
                <Row xs={12} md={4} lg={3} className="g-3">
                    {
                        manageOrderList.map(place =>
                            <Col>
                                <Card className="card"   style={{ width: '18rem' }}>
                                    <div className=""><div><Card.Img variant="top" src={place.picture} style={{ width: "285px", height: "150px" }} fluid /></div>
                                        <div className=""><Card.Body>
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

                                            <Button onClick={() => handleDel(place._id)} variant="info" className="w-100">Delete</Button>
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