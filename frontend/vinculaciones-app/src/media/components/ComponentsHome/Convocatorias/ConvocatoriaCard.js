import {Card}from 'react-bootstrap';
import './convocatorias.css';

function convocatoriacard({img, link}) {
  return (
    <Card className='d-flex align-items-center justify-content-center'>
      <a href={link} target="_blank">
        <Card.Img className='convocatorias-card' src={img} /> 
      </a>
    </Card>
  );
}

export default convocatoriacard;