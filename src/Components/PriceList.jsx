import React, { useState } from 'react';
import './PriceList.css';

const priceListData = {
    'Оценка недвижимости': [
        { name: 'жилые дома (домовладения), доля в доме в зависимости от площади ', price: 'от 5 500 руб.' },
        { name: 'квартира, комната, доли в комнате или в квартире до 100 м.кв. ', price: 'от 3 500 руб.' },
        { name: 'квартира, комната, доли в комнате или в квартире до 100 м.кв. ', price: 'от 4 500 руб.' },
        { name: 'Гараж', price: 'от 3 500 руб.' },
        { name: 'нежилые помещения', price: 'от 8 000 руб.' },
        { name: 'офисные здания и помещения до 1 000 кв.м.', price: 'от 3 000 руб.' },
        { name: 'Коммерческая недвижимость', price: 'от 5 000 руб.' },
        { name: 'Сооружение', price: 'от 3 000 руб.' },
        { name: 'Земельные участки', price: 'от 2 000 руб.' },
        { name: 'Стоимость ущерба недвижимости', price: 'от 4 000 руб.' },
        { name: 'Рыночная стоимость арендной платы', price: 'от 3 000 руб.' },
      ],
  'Кадастровые работы': [
    { name: 'Межевой план земельных участков', price: 'от 4 000 руб.' },
    { name: 'Технический план здания', price: 'от 4 000 руб.' },
    { name: 'Технический план сооружения', price: 'от 6 000 руб.' },
    { name: 'Технический план объекта незавершенного строительства', price: 'от 3 500 руб.' },
    { name: 'Технический план помещения', price: 'от 3 000 руб.' },
    { name: 'Акт обследования', price: 'от 2 000 руб.' },
    { name: 'Схема расположения земельного участка', price: 'от 2 000 руб.' },
    { name: 'Вынос в натуру границ земельного участка', price: 'от 500 руб.' },
    { name: 'Заключение кадастрового инженера', price: 'индивидуально' },
    { name: 'Геодезическое сопровождение строительства', price: 'индивидуально' },
  ],
  
  'Правовые вопросы ': [
    { name: 'Предоставление выписки из ЕГРН', price: 'от 500 руб.' },
    { name: 'Предоставление справки о прописанных', price: 'от 2 000 руб.' },
    { name: 'Копии документов БТИ', price: 'от 3 000 руб.' },
    { name: 'Проверка продавца (продавцов) на предмет банкротства', price: 'от 2 000 руб.' },
    { name: 'Проверка продавца (продавцов) в ПНД и НД диспансерах', price: 'от 2 000 руб.' },
    { name: 'Проверка на предмет ареста недвижимости', price: 'от 1 000 руб.' },
    { name: 'Дополнительная юридическая экспертиза документов', price: 'от 2 000 руб.' },
  ],

};

const PriceList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="price-list" id='price-list'>
      <h2 className="section-title">Прайс-лист</h2>
      <div className="accordion">
        {Object.keys(priceListData).map((category, index) => (
          <div key={category} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{category}</h3>
              <span className={`arrow ${activeIndex === index ? 'open' : ''}`}>▶</span>
            </div>
            <div
              className={`accordion-body ${activeIndex === index ? 'open' : ''}`}
            >
              <table>
                <thead>
                  <tr>
                    <th>Наименование</th>
                    <th>Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {priceListData[category].map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceList;
