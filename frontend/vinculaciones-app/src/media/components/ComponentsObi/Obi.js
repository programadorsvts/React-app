import {Row,Container, Col} from 'react-bootstrap';
import ObiCard from '../ComponentsObi/ObiCard';


function herramienta(){

        const herramienta1={      
                img:'assets/images/herramienta.png',   
                href:'https://www.trademap.org/Index.aspx' ,
                titulo:'Trade Map',                                    
                texto:'Estadísticas comerciales para el desarrollo empresarial internacional Datos comerciales mensuales, trimestrales y anuales. Valores de importación y exportación, volúmenes, tasas de crecimiento, cuotas de mercado, etc.'   
        }

        const herramienta2={      
                img:'assets/images/herramienta.png',   
                href:'https://www.wto.org/indexsp.htm' ,
                titulo:'Organizacion Mundial de Comercio',                                    
                texto:'La Organización Mundial del Comercio (OMC) es la única organización internacional que se ocupa de las normas que rigen el comercio entre los países.' 
        }

         const herramienta3={      
                img:'assets/images/herramienta.png',   
                href:'https://www.iadb.org/es/proyectos',
                titulo:'Banco Interamericano de Desarrollo',                                    
                texto:'Trabajamos para mejorar la calidad de vida en América Latina y el Caribe. Ayudamos a mejorar la salud, la educación y la infraestructura a través del apoyo financiero y técnico a los países que trabajan para reducir la pobreza y la desigualdad.',
        }
        const herramienta4={      
                img:'assets/images/herramienta.png',   
                href:'https://cordis.europa.eu/es',
                titulo:'Herramienta 4',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }
        const herramienta5={      
                img:'assets/images/herramienta.png',   
                href:'https://www.ovtt.org/',
                titulo:'Herramienta 5',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }
        const herramienta6={      
                img:'assets/images/herramienta.png',   
                href:'https://biznar.com/biznar/desktop/en/search.html',
                titulo:'Herramienta 6',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }
        const herramienta7={      
                img:'assets/images/herramienta.png',   
                href:'https://search.carrot2.org/#/search/web',
                titulo:'Herramienta 7',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }
        const herramienta8={      
                img:'assets/images/herramienta.png',   
                href:'https://www.sciencedirect.com/',
                titulo:'Herramienta 8',                                    
                texto:'Descripcion sobre la herramienta y su fin',
        }
        const herramienta9={      
                img:'assets/images/herramienta.png' ,   
                href:'https://www.argentina.gob.ar/ciencia/vintec' ,
                titulo:'Herramienta 9' ,                                    
                texto:'Descripcion sobre la herramienta y su fin' ,
        }


   
        return(
                <>

                        <Container className='herramienta-container'>
                            
                                <Row className='mt-5'>
                                        <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Unidad De Busqueda Inteligente</h1>                                
                                        
                                        <Col className='mt-5 d-flex justify-content-center'>

                                                <ObiCard data={herramienta1}></ObiCard> 
                                        
                                        </Col>
                                
                                        <Col className='mt-5  d-flex justify-content-center'>

                                                <ObiCard data={herramienta2}></ObiCard> 
                                        
                                        </Col>
                                        
                                        <Col className='mt-5  d-flex justify-content-center'>

                                                <ObiCard data={herramienta3}></ObiCard> 
                                        
                                        </Col>

                                </Row>

                            <Row   className=' '>                          
                                <Col className='mt-3 d-flex justify-content-center'>

                                         <ObiCard data={herramienta4}></ObiCard> 
                                    
                                </Col>
                            
                                <Col className='mt-3  d-flex justify-content-center'>

                                        <ObiCard data={herramienta5}></ObiCard> 
                                    
                                </Col>
                                
                                <Col className='mt-3  d-flex justify-content-center'>

                                        <ObiCard data={herramienta6}></ObiCard> 
                                    
                                </Col>
                            </Row>
                             
                        </Container>   
                </>
        );
}


 export default herramienta;