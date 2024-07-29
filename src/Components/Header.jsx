import React from 'react';
import './Header.css';
import logo from './logo.png'; // Импортируем логотип

const Header = () => {
  const handleScrollTo = (event, targetId) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 150,
        behavior: 'smooth' // Добавляем плавную прокрутку
      });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href="#"><img src={logo} alt="Логотип" className="header-logo" /></a> {/* Логотип слева */}
        <nav className="header-nav"> {/* Навигация по центру */}
          <a href="#about" className="nav-link" onClick={(e) => handleScrollTo(e, 'about')}>О компании</a>
          <a href="#price-list" className="nav-link" onClick={(e) => handleScrollTo(e, 'price-list')}>Прайс-лист</a>
          <a href="#consultation" className="nav-link" onClick={(e) => handleScrollTo(e, 'consultation')}>Контакты</a>
          <a href="#part" className="nav-link" onClick={(e) => handleScrollTo(e, 'part')}>Партнерам</a>
        </nav>
        <div className="header-right"> {/* Контакты и кнопка справа */}
          <div className="contact-info">
            <p className="contact-number">+7-908-787-76-79</p>
            <p className="contact-number">+7-920-557-66-77</p>
          </div>
          <a href="#consultation" className="consultation-button" onClick={(e) => handleScrollTo(e, 'consultation')}>КОНСУЛЬТАЦИЯ</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
