import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: false,
  };

  const images = [
    "https://images.pexels.com/photos/776358/pexels-photo-776358.jpeg?auto=compress&cs=tinysrgb&w=1920", // Green leaves close-up
    "https://images.pexels.com/photos/169523/pexels-photo-169523.jpeg?auto=compress&cs=tinysrgb&w=1920", // Plant nursery
    "https://images.pexels.com/photos/286764/pexels-photo-286764.jpeg?auto=compress&cs=tinysrgb&w=1920", // Row of young plants
    "https://images.pexels.com/photos/1130706/pexels-photo-1130706.jpeg?auto=compress&cs=tinysrgb&w=1920", // Tropical plants
  ];

  return (
    <div className="carousel-container">
      <style>
        {`
          .carousel-container {
            width: 100vw;
            margin: 0 auto;
            overflow: hidden;
            background: #f8f8f8;
            position: relative;
          }

          .slick-prev, .slick-next {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
            padding: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .slick-prev {
            left: 10px;
          }

          .slick-next {
            right: 10px;
          }

          .slick-prev:hover, .slick-next:hover {
            background-color: rgba(0, 0, 0, 0.7);
          }

          .slick-prev:before, .slick-next:before {
            font-size: 20px;
            color: white;
          }

          .slick-dots {
            bottom: 20px;
          }

          .slick-dots li button:before {
            font-size: 12px;
            color: #000;
          }

          .slick-slide img {
            display: block;
            width: 100vw;
            height: 80vh;
            object-fit: cover;
          }
        `}
      </style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default ImageCarousel;
