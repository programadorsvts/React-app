import { Container } from 'react-bootstrap';
import './galeria.css';
import GaleriaModal from './GaleriaModal';
import { useState } from 'react';

function Galeria({ imagenes}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  return (
    <Container className='galeria mt-5 mb-5'>
      {imagenes.map((imagen, index) => (
        <img 
          key={index}
          className='card-element ' 
          src={imagen.src} 
          alt={imagen.alt} 
          onClick={() => {
            if (imagen.clickable) {
              setModalContent(imagen.component);
              setModalShow(true);
            }
            setModalTitle(imagen.title)
          }}
        />
      ))}
      <GaleriaModal title={modalTitle} show={modalShow} onHide={() => setModalShow(false)}>
        {modalContent}
      </GaleriaModal>
    </Container>
  );
}

export default Galeria;
