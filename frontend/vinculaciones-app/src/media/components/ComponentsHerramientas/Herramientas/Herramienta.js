import {Row,Container, Col} from 'react-bootstrap';
import HerramientaCard from '../Herramientas/HerramientaCard';

function revista(){
        const herramienta1={      
                img:'assets/images/herramienta.png',   
                hreft:'#/ '  ,
                titulo:'Herramienta 1',                                    
                texto:'Esta herramienta se utiliza para ',    
        }

        const herramienta2={      
                img:'assets/images/herramienta.png',   
                hreft:'#/ '  ,
                titulo:'Herramienta 1',                                    
                texto:'Esta herramienta se utiliza para ',    
        }

         const herramienta3={      
                img:'assets/images/herramienta.png',   
                hreft:'#/ '  ,
                titulo:'Herramienta 1',                                    
                texto:'Esta herramienta se utiliza para ',    
        }

         const herramienta4={      
                img:'assets/images/herramienta.png',   
                hreft:'#/ '  ,
                titulo:'Herramienta 1',                                    
                texto:'Esta herramienta se utiliza para ',    
        }
       
        
        return(
                <>
                        <Container>
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Publicaciones</h1>
                            <Row   className='mt-5  '>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <HerramientaCard data={herramienta1}></HerramientaCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <HerramientaCard data={herramienta2}></HerramientaCard>

                                </Col>
                                
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <HerramientaCard data={herramienta3}></HerramientaCard>

                                </Col>
                            </Row>
                             <Row   className='mt-5 '>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <HerramientaCard data={herramienta4}></HerramientaCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <HerramientaCard ></HerramientaCard>

                                </Col>
                            </Row>
                        </Container>   
                </>
        );
}


 export default revista;