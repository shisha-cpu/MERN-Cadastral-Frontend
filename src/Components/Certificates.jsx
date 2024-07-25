import React, { useState } from 'react';
import './Certificates.css';

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

  return (
    <div className="container">
      <h2 className="section-title" id='cert' >Дипломы и сертификаты</h2>
      <div className="certificates">
        <img 
          src="https://avatars.mds.yandex.net/get-ydo/9712213/2a00000190bfd819c8977ab199c0be1dff6c/diploma" 
          alt="" 
          onClick={() => openModal("https://avatars.mds.yandex.net/get-ydo/9712213/2a00000190bfd819c8977ab199c0be1dff6c/diploma")}
        />
        <img 
          src="https://avatars.mds.yandex.net/get-ydo/11397567/2a00000190bfd87aa8f0e4890d579aff2b7e/diploma" 
          alt="" 
          onClick={() => openModal("https://avatars.mds.yandex.net/get-ydo/11397567/2a00000190bfd87aa8f0e4890d579aff2b7e/diploma")}
        />
        <img 
          src="https://avatars.mds.yandex.net/get-ydo/4421910/2a00000190bfd8c10c0f4a9f389f1f5a1862/diploma" 
          alt="" 
          onClick={() => openModal("https://avatars.mds.yandex.net/get-ydo/4421910/2a00000190bfd8c10c0f4a9f389f1f5a1862/diploma")}
        />
        <img 
          src="https://avatars.mds.yandex.net/get-ydo/12406519/2a00000190bfd8c0141fd0654c9bbc910d98/diploma" 
          alt="" 
          onClick={() => openModal("https://avatars.mds.yandex.net/get-ydo/12406519/2a00000190bfd8c0141fd0654c9bbc910d98/diploma")}
        />
      </div>

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
