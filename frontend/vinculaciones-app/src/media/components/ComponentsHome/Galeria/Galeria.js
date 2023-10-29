import { Container } from 'react-bootstrap';
import './galeria.css';
import GaleriaModal from './GaleriaModal';
import { useState } from 'react';

function Galeria({ imagenes }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container className='galeria mt-5 mb-5'>
      {imagenes.map((imagen, index) => (
        <img 
          key={index} 
          src={imagen.src} 
          alt={imagen.alt} 
          onClick={imagen.clickable ? () => setModalShow(true) : null}
        />
      ))}
      <GaleriaModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default Galeria;
