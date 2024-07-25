import React from 'react';
import './Footer.css'; // Убедитесь, что CSS файл находится в том же каталоге, что и компонент

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      {/* <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      </ul> */}
      <div className="contact-info">
        <h3>Контактная информация</h3>
        <p><strong>Телефон:</strong> +7-908-787-76-79, +7-920-557-66-77</p>
        <p><strong>График работы:</strong> 9:00-20:00, Ежедневно (воскресенье выходной)</p>
        <p><strong>Адреса:</strong></p>
        <ul>
          <li>Старый Оскол, микрорайон Надежда, 6</li>
          <li>Новый Оскол, Центральная площадь, 1</li>
          <li>Дубовое, улица Щорса, 64Б</li>
        </ul>
      </div>
      <p>&copy;2024 Все права защищены </p>
    </footer>
  );
};

export default Footer;
