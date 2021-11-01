import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Controller, useForm, TextField } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import UseDestination from '../../Hooks/UseDestination';
import UseAuth from '../../Hooks/UseAuth';
import './Booknow.css'

const Booknow = () => {
    let history = useHistory();
    const { logOut, googleSignin, user } = UseAuth()
    console.log(user.displayName);
    const [destinationList] = UseDestination();
    const { destinationID,index } = useParams()
    const [singleservice, setSingleservice] = useState({});
    // const [destinationList, setDestinationList] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/places/${destinationID}`)
            .then(res => res.json())
            .then(data => setSingleservice(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

    };
const handleBook=(index)=>{
    // window.rel
        const data=destinationList[index];
        // const UserEmail=user.email;
        data.email= user.email
        // data.UserEmail= user?.UserEmail
        console.log(data);
        axios.post('http://localhost:5000/manageOrder', data)
        .then(function (response) {
          if(response.data.insertedId){
              alert('Package added successfully')
              reset()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        history.push("/manageorders");
        // window.location.reload();
}

    return (
        <div className="" style={{ marginTop: '100px' }}>
            <Container>
                <Row lg={2} g={5}>
                    <Col className="add-service">
                        <h1 className="text-center">Order Form</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="firstName"  {...register("firstName")} />
                            <input placeholder="lastName"  {...register("lastName")} />
                            {/* <input  placeholder="Enter your email that you are currently logged in" {...register("emailReg")} required/> */}
                            <input placeholder="Enter your mobile number" type="number" {...register("mobile")} />
                            <input onClick={()=>handleBook(index)} type="submit" value="Book Trip" />
                            {/* {console.log('hey')} */}
                        </form>
                    </Col>
                    <Col>
                        <h1>{singleservice?.name}</h1>
                        <Image src={singleservice?.picture} fluid />
                        <br />
                        <small>{singleservice?.description}</small> <br />
                        <small><span className="fw-bolder text-secondary">Price:</span> {singleservice?.price}</small> <br />
                        <small><span className="fw-bolder text-secondary">Duration:</span> {singleservice?.duration}</small>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booknow;