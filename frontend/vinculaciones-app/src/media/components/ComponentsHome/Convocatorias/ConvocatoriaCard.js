import {Card}from 'react-bootstrap';
import './convocatorias.css';






function convocatoriacard(props) {
  return (
    
    <Card className='convocatorias-card'>
              
        <Card.Img className='me-5 convocatorias-img' src={props.info.ruta} /> 
       
    </Card>
  );
}

export default convocatoriacard;