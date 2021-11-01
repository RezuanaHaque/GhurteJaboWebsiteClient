import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import UseDestination from '../../Hooks/UseDestination';
import EachDestination from './EachDestination';
import "./Destination.css"

const Destination = () => {
    const [destinationList] = UseDestination();
    return (
        <div className="backImg "  style={{ marginTop: '100px' }}>
            {/* <Image className="w-100 opacity-50" src="https://i.ibb.co/LCyDxfz/pngwing-com-1.png" fluid 
            
            /> */}

            <Container>
                <h1 className="text-center m-4">Destinations</h1>
                <Row xs={12} md={4} lg={3} className="g-3">
                    {
                        destinationList.map((destination,index) => <EachDestination key={destination._id} destination={destination} index={index}></EachDestination>)
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Destination;