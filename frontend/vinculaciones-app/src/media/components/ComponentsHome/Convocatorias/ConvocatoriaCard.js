import {Card}from 'react-bootstrap';
import './convocatorias.css';

function convocatoriacard({ruta}) {
  return (
    <Card className='d-flex align-items-center justify-content-center'>
      <a href='#0'>
        <Card.Img className='convocatorias-card' src={ruta} /> 
      </a>
    </Card>
  );
}

export default convocatoriacard;