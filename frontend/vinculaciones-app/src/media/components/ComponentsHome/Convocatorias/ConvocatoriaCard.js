import {Card}from 'react-bootstrap';
import './convocatorias.css';

function convocatoriacard({ruta}) {
  return (
    <Card className='d-flex align-items-center justify-content-center'>
      <a href='#'>
        <Card.Img className='convocatorias-card' src={ruta} /> 
      </a>
    </Card>
  );
}

export default convocatoriacard;