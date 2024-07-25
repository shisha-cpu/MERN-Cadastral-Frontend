// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Оценка Кадастр Право</h1>
        <nav className="header-nav">
          <a href="#services" className="nav-link">Услуги</a>
          <a href="#price-list" className="nav-link">Прайс-лист</a>
          <a href="#cert" className="nav-link">Дипломы </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
