import React from 'react';
import './HomeCarousel.css'; // Import the corresponding CSS file

const HomeCarousel = () => {
  // Mock data for the carousel slides
  const slides = [
    {
      id: 1,
      image: 'images/slide1.jpg',
      altText: 'First slide',
      title: 'First Slide Label',
      caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      id: 2,
      image: 'images/slide2.jpg',
      altText: 'Second slide',
      title: 'Second Slide Label',
      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      image: 'images/slide3.jpg',
      altText: 'Third slide',
      title: 'Third Slide Label',
      caption: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  ];

  return (
    <div className="carousel slide" id="carouselExample" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            data-target="#carouselExample"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={slide.image} className="d-block w-100" alt={slide.altText} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.title}</h5>
              <p>{slide.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HomeCarousel;
