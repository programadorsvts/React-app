import { Container } from 'react-bootstrap';
import './galeria.css';
import GaleriaModal from './GaleriaModal'
import { useState } from 'react';

function Galeria() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className='galeria mt-5 mb-5'>
      <img src='assets/images/galeria-4.webp' alt='imagen-4'></img>
      <img src='assets/images/galeria-2.jpg' alt='imagen-2'></img>
      <GaleriaModal show={modalShow} onHide={() => setModalShow(false)} />
      <img src='assets/images/galeria-3.webp' alt='imagen-2'></img>
      <img src='assets/images/galeria-1.webp' alt='imagen-1'></img>
      <img src='assets/images/galeria-5.webp' alt='imagen-5'></img>
      <img src='assets/images/galeria-6.jpg' alt='imagen-6'></img>
      <img className='card-element'src='assets/images/galeria-7.webp' alt='imagen-1' onClick={() => setModalShow(true)}></img>
    </Container>
  );
}

export default Galeria;







