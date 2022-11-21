
import {Card,Col,Row}from 'react-bootstrap'
import './revistacard.css';


function RevistaCard(props) {
   
  return (       
                <Row>
                        <Col  className=' '>
                            <a href={props.data.link} target="_blank" rel="noreferrer">
                                  <Card.Img className='revista-img' src={props.data.imagen}  style={{height : "450px", width: "310px"}}/>
                            </a>
                               <Card.Body >

                                  <Card.Title className=" text-center mt-3 text-1">{props.data.titulo}</Card.Title>

                                  <Card.Text className="text -center text-2">{props.data.fecha}</Card.Text>

                                  {/* <Card.Text className="">isbn:{props.data.isbn}</Card.Text> */}
                                
                              </Card.Body>
                              
                        </Col>
                </Row> 
  );
}

export default RevistaCard;


