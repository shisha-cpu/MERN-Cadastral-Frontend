import React from 'react';
import './Header.css';
import logo from './logo.jpg'; // Импортируем логотип

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="#"><img src={logo} alt="Логотип" className="header-logo" /></a> {/* Логотип слева */}
        <nav className="header-nav"> {/* Навигация по центру */}
          <a href="#about" className="nav-link">О компании</a>
          <a href="#price-list" className="nav-link">Прайс-лист</a>
          <a href="#consultation" className="nav-link">Контакты</a>
        </nav>
        <div className="header-right"> {/* Контакты и кнопка справа */}
          <div className="contact-info">
            <p className="contact-number">+7-908-787-76-79</p>
            <p className="contact-number">+7-920-557-66-77</p>
          </div>
          <a href="#consultation" className="consultation-button">КОНСУЛЬТАЦИЯ</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
