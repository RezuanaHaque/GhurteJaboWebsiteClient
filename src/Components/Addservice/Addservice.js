import React, { useState } from 'react';
import './Addservice.css'
import { Container, Modal,Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios, { Axios } from 'axios';
import { render } from 'react-dom';
// import Button from '@restart/ui/esm/Button';
const Addservice = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://floating-spire-72741.herokuapp.com/places', data)
          .then(function (response) {
            if(response.data.insertedId){
                alert('Package added successfully')
                reset()
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    return (
        <div style={{ marginTop: '100px' }} className="add-service">
            <Container className="text-center">
                <h1 className="text-secondary fw-bold m-5">Please Add New Service</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input placeholder="Package Name" {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder="Long description"  {...register("description")} />
                    <input placeholder="about(not more than 10 words)"  {...register("about")} />
                    <input placeholder="price"  type="number" {...register("price")} />
                    <input placeholder="Image Link"  {...register("picture")} />
                    <input placeholder="Location"  {...register("address")} />
                    <input placeholder="Duration"  {...register("duration")} />
                    <input placeholder="Review(Ex: 20+ reviews)"  {...register("review")} />
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default Addservice;