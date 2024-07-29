import React, { useState } from 'react';
import Slider from 'react-slick';
import './Certificates.css';

import img0 from './сертификаты/0.jpg';
import img1 from './сертификаты/1.jpg';
import img2 from './сертификаты/2.jpg';
import img3 from './сертификаты/3.jpg';
import img4 from './сертификаты/4.jpg';
import img5 from './сертификаты/5.jpg';
import img6 from './сертификаты/6.jpg';
import img7 from './сертификаты/7.jpg';
import img8 from './сертификаты/8.jpg';
import img9 from './сертификаты/9.jpg';
import img11 from './сертификаты/11.jpg';
import img12 from './сертификаты/12.jpg';
import img13 from './сертификаты/13.jpg';
import img14 from './сертификаты/14.jpg';
import img15 from './сертификаты/15.jpg';
import img16 from './сертификаты/16.jpg';

const images = [img0, img1, img2, img3, img5, img6, img7, img8, img9, img12, img13, img14, img15, img16];

const Certificates = () => {
  const [modalSrc, setModalSrc] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (src) => {
    setModalSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Включаем стрелки навигации
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="section-title" id='cert'>Дипломы и сертификаты</h2>
      <Slider {...settings} className="slider">
        {images.map((src, index) => (
          <div key={index}>
            <img 
              src={src} 
              alt={`Certificate ${index + 1}`} 
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </Slider>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalSrc} alt="Certificate" />
        </div>
      )}
    </div>
  );
};

export default Certificates;
