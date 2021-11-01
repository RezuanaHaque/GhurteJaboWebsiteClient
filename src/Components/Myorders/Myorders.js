import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';

const Myorders = () => {
    const { user } = UseAuth()
    console.log(user);
    const [manageOrderList, setmanageOrderList] = useState([])
    const [OrderList, setOrderList] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/manageOrder")
            .then(res => res.json())
            .then(data => setmanageOrderList(data))
    }, [])
    useEffect(() => {
        const orders = manageOrderList.filter
            (order => order?.email == user?.email)
        setOrderList(orders)
    }, [manageOrderList])


    const handleDel = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/manageOrder/${id}`;
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
                <h1 className="text-center m-4">My Orders</h1>
                <Row xs={12} md={4} lg={3} className="g-3">
                    {
                        OrderList.map(order =>
                            <Col>
                                <Card className="card"   style={{ width: '18rem' }}>
                                    <div className=""><div><Card.Img variant="top" src={order.picture} style={{ width: "285px", height: "150px" }} fluid /></div>
                                        <div className=""><Card.Body>
                                            <Card.Title>{order.name}</Card.Title>
                                            <div className="d-flex justify-content-between fw-bold text-secondary">
                                                <small><i className="fas fa-map-marker-alt"></i> {order.address}</small>
                                                <small>{order.duration}</small>
                                            </div>
                                            <Card.Text>
                                                <small className="text-secondary">{order.about}</small> <br />
                                                <small className="fw-bold text-secondary">Price:  <span>{order.price}</span></small> <br />
                                                <small className="fw-bold text-secondary">Booked By: <span>{order.email}</span></small>

                                            </Card.Text>
                                            <Button onClick={() => handleDel(order._id)} variant="info" className="w-100">Delete</Button>
                                            {/* <Button onClick={() => handleDel(place._id)} variant="info" className="w-100">Delete</Button> */}
                                        </Card.Body></div></div>
                                </Card>
                            </Col>
                        )
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Myorders;