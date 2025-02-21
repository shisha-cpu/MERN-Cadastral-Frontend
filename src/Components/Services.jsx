// Services.jsx
import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Кадастровые работы',
    imgSrc: 'https://komiinform.ru/content/news/images/180668/stoimost_meghevaniya.jpg',
    description: 'Кадастровые работы производятся в отношении: земельных участков, зданий, помещений. Данные работы необходимы для получения на эти объекты права собственности или прекращения права собственности на основании: изменения границ, завершения строительства, реконструкции, перепланировки или при сносе. Наши специалисты имеют многолетний опыт кадастровой и инвентаризационной деятельности. Профессиональный подход гарантирован.',
    price: 'от 2 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  },
  {
    title: 'Оценка недвижимости',
    imgSrc: 'https://static.tildacdn.com/tild3464-3633-4332-a661-356236373033/2024-03-05_14-05-02_.jpeg',
    description: 'Оценка недвижимости производится для предоставления залога в банк, для вступления наследства, для суда, для расчета материального вреда, аренды, продажи, компенсации. Нашими экспертами проводится детальный анализ рынка, чтобы в минимальные сроки и с самыми высокими стандартами качества выполнить данную процедуру.',
    price: 'от 2 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  },
  {
    title: 'Проверка юридической чистоты',
    imgSrc: 'https://kupitefirmy.ru/wp-content/uploads/2019/05/cf.jpg',
    description: 'Проверка юридической чистоты необходима для того, чтобы знать, какую недвижимость вы приобретаете, так как с учетом экономической нестабильности данная недвижимость может быть подвергнута арестам, быть в залоге, произведены незаконные реконструкции (перепланировки), могут быть лица, имеющие право на проживание, долги по коммунальным платежам. Мы имеем доступ к федеральным информационным ресурсам.',
    price: 'от 1 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  },
  {
    title: 'Сопровождение сделок',
    imgSrc: 'https://www.lockyers.co.uk/wp-content/uploads/2019/05/D-O1.jpg',
    description: 'Сопровождение сделок с недвижимостью необходимо для того, чтобы защитить материальные интересы сторон, обеспечить законность сделки, правильно оформить все документы и передать недвижимость новому собственнику в установленном законом порядке. Наши юристы занимаются каждой сделкой индивидуально, предотвращая любые ошибки и максимально защищая клиента.',
    price: 'от 2 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  },
  {
    title: 'Решение споров',
    imgSrc: 'https://liter.kz/cache/imagine/1200/uploads/news/2022/08/03/62ea49d97b332395187238.png',
    description: 'Юристы нашей компании помогут отстоять ваши права, досудебно урегулировать спорный вопрос или заключить мировое соглашение. Также соберут всю необходимую правовую документацию, изложат ваш спор в исковом заявлении и представят интересы в суде. Наши юристы имеют солидный опыт, отслеживают изменения законодательства и судебную практику, а также выполняют работу на высочайшем профессиональном уровне.',
    price: 'от 1 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  },
  {
    title: 'Экспертиза недвижимости',
    imgSrc: 'https://leader-id.storage.yandexcloud.net/upload/579938/3440d987-d647-42a9-b285-298d4ba07783.jpg',
    description: 'Экспертиза недвижимости необходима для восстановления законных прав и проводится для установления границ земельных участков, сервитутов (проходов, проездов), при узаконивании самовольных построек, выявлении недостатков в строительстве, установления ущерба или изъятия из незаконного пользования. Всеми экспертизами занимаются профессионалы своего дела, имеющие соответствующее образование и многолетний опыт.',
    price: 'от 5 000 рублей',
    buttonText: 'ЗАКАЗАТЬ УСЛУГУ'
  }
];

const Services = () => {
  return (
    <section className=" container services" id="services">
      <h2 className="section-title">Наши Услуги</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-price">{service.price}</p>
            <button className="service-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
