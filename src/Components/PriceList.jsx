import React, { useState } from 'react';
import './PriceList.css';

const priceListData = {
'Оценка недвижимости': [
    { name: 'Жилые дома, доли', price: 'от 5 500 руб.' },
    { name: 'Квартира, комната до 100 м²', price: 'от 3 500 руб.' },
    { name: 'Квартира, комната до 100 м²', price: 'от 4 500 руб.' },
    { name: 'Гараж', price: 'от 3 500 руб.' },
    { name: 'Нежилые помещения', price: 'от 8 000 руб.' },
    { name: 'Офисы до 1 000 м²', price: 'от 3 000 руб.' },
    { name: 'Коммерческая недвижимость', price: 'от 5 000 руб.' },
    { name: 'Сооружение', price: 'от 3 000 руб.' },
    { name: 'Земельные участки', price: 'от 2 000 руб.' },
    { name: 'Ущерб недвижимости', price: 'от 4 000 руб.' },
    { name: 'Арендная плата', price: 'от 3 000 руб.' },
    { name: 'Земля коммерческая до 1 Га', price: 'от 5 000 руб.' },
    { name: 'Земля коммерческая 1 Га', price: 'от 8 000 руб.' },
    { name: 'Земля под ИЖС и садоводство', price: 'от 3 500 руб.' },
    { name: 'Право аренды земли', price: 'от 3 500 руб.' },
    { name: 'Земля для наследства', price: 'от 3 500 руб.' },
    { name: 'Незавершённое строительство', price: 'от 5 500 руб.' },
    { name: 'Затраты на восстановление', price: 'от 4 500 руб.' },
    { name: 'Мебель, личные вещи', price: 'от 3 500 руб.' },
    { name: 'Оценка оружия', price: 'от 3 500 руб.' },
    { name: 'Оспаривание кадастра', price: 'от 20 000 руб.' },
    { name: 'Оценка бизнеса', price: 'от 3 500 руб.' },
    { name: 'Незавершённое строительство', price: 'от 10 000 руб.' },
    { name: 'Копия отчёта', price: 'от 500 руб.' },
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
              <table >
                <thead>
                  <tr>
                    <th className='MAAMN'>Наименование</th>
                    <th>Стоимость</th>
                  </tr>
                </thead >
                <tbody >
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
