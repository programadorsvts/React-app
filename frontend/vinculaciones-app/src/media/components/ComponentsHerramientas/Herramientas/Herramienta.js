import {Row,Container, Col} from 'react-bootstrap';
import HerramientaCard from '../Herramientas/HerramientaCard';


function herramienta(){
        const herramienta1={      
                img:'Vinculaciones-Frontend/assets/images/herramienta.png',   
                hreft:'#0' ,
                titulo:'Herramienta 1',                                    
                texto:'Descripcion sobre la herramienta y su fin '   
        }

        const herramienta2={      
                img:'Vinculaciones-Frontend/assets/images/herramienta.png',   
                hreft:'#0' ,
                titulo:'Herramienta 2',                                    
                texto:'Descripcion sobre la herramienta y su fin ' 
        }

         const herramienta3={      
                img:'Vinculaciones-Frontend/assets/images/herramienta.png',   
                hreft:'#0',
                titulo:'Herramienta 3',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }

   
        
        return(
                <>

                        <Container className='herramienta-container'>
                            
                            <Row   className='mt-5  '>
                                <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Herramientas</h1>                                
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
                             
                        </Container>   
                </>
        );
}


 export default herramienta;