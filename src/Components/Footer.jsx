import React from 'react';
import './Footer.css'; // Убедитесь, что CSS файл находится в том же каталоге, что и компонент

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
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
        <li className="social-icon__item">
          <a className="social-icon__link" href="tg://resolve?domain=9087877679">
            <ion-icon name="paper-plane"></ion-icon> {/* Иконка Telegram */}
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="mailto:rostilksalam@yandex.ru">
            <ion-icon name="mail"></ion-icon> {/* Иконка почты */}
          </a>
        </li>
      </ul>
      <div className="contact-info">
        <h3>Контактная информация</h3>
        <p><strong>Телефон:</strong> +7-908-787-76-79, +7-920-557-66-77</p>
        <p><strong>Telegram:</strong> <a href="https://telegram.me/okp_info31">@okp_info31</a> </p>
        <p><strong>Email:</strong> okp-info@mail.ru</p>
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
