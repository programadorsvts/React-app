import {Card, Col, Row}from 'react-bootstrap'



function gestioncard(props) {
  return (
    
    <Card  className="shadow d-flex justify-content-center" style={{height : "130px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                  <Col>
                        <Card.Img src={props.info.imagen}  style={{height : "100px", width: "100px"}}/>
                  </Col>
                  
                  <Col>
                          <Card.Text className="mt-3">{props.info.titulo}</Card.Text>
                  </Col>
              <a href={props.info.ruta} download target="_blank" rel='noreferrer' >Ver informacion</a>
            </Row>
            
        </Card.Body>
    </Card>
  );
}

export default gestioncard;