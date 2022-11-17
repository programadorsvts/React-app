import {Card, Col, Row}from 'react-bootstrap';






function redescard(props) {
  return (
    
    <Card className='card-redes'>
      
      <Card.Img className='icon-redes' src={props.info.ruta}  />
  
    </Card>
  );
}

export default redescard;