import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
<Carousel fade>
  <Carousel.Item  interval={1000}>
    <img
      className="d-block w-100 h-75"
      src='https://wallpapercave.com/wp/wp5160032.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Enjoy Beautiful Experiences Of NEW-YORK</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src="https://wallpapercave.com/wp/wp9140031.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Enjoy Beautiful Experiences Of SNOWFALL</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src="https://wallpapercave.com/wp/wp6702581.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Enjoy Beautiful Experiences Of HOT AIR BALLON</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;
