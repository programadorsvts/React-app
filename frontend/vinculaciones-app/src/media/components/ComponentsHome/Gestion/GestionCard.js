import {Card, Col, Row}from 'react-bootstrap';






function gestioncard() {
  return (
    
    <Card  className="shadow" style={{height : "130px", width: "356px"}}>
        
      
      
        <Card.Body  className="text-secondary">
            <Row>
                    
                    <Col>
                        
                    </Col>
                    

                    <Col>
                            <Card.Text className="mt-3">Servicios Tecnológicos de Alto Nivel</Card.Text>
                    </Col>

            </Row>
        </Card.Body>
    </Card>
  );
}

export default gestioncard;