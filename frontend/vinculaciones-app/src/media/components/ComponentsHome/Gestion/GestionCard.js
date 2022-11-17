import {Card, Col, Row}from 'react-bootstrap'
import './gestion.css'  


function gestioncard(props) {
  return (
    
    <Card  className="card-gestion" >
        
      
      
     
            <Card.Body  className="">
                <Row>
                      <Col>
                      <a  className='' href={props.info.ruta} download  target="_blank" rel='noreferrer' >
                            <Card.Img className='mt-3' src={props.info.imagen}  />
                        </a>    
                      </Col>
                      
                      <Col>
                              <Card.Text className="mt-3 encabezado-5">{props.info.titulo}</Card.Text>
                              
                      </Col>
                   
                </Row>
            </Card.Body>

      </Card>
   
  );
}

export default gestioncard;