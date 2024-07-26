import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img6 from '../images/img6.jpg'
import img10 from '../images/img10.jpg'
import img20 from '../images/img20.jpg'
import './CarouselPage.css'




function CarouselPage() {
  return (



    <div className='Carousell'>
      <Carousel>
        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>hello</h1>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
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



        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
            className="d-block w-100"
            src={img6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
            className="d-block w-100"
            src={img10}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>hello</h1>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item className='box'>
          <img style={{ height: '78vh' }}
            className="d-block w-100"
            src={img20}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>



        {/*     
    <Carousel.Item className='box'>
      <img style={{height:'78vh'}}
        className="d-block w-100"
        src={img7}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>hello</h1>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='box'>
      <img style={{height:'78vh'}}
        className="d-block w-100"
        src={img8}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item> */}

      </Carousel>

    </div>
  )
}

export default CarouselPage