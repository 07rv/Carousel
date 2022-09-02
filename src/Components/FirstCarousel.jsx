import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../Image/img1.jpeg";
import img2 from "../Image/img2.jpeg";
import img3 from "../Image/img3.jpeg";
import img4 from "../Image/img4.jpeg";
import img5 from "../Image/img5.jpeg";


const firstCarousel = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item interval={4000}>
        <img
          height="288" width="388"
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          height="288" width="388"
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          height="288" width="388"
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          height="288" width="388"
          className="d-block w-100"
          src={img4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          height="288" width="388"
          className="d-block w-100"
          src={img5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fiveth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default firstCarousel