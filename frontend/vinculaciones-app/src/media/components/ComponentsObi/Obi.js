import {Row,Container, Col} from 'react-bootstrap';
import ObiCard from '../ComponentsObi/ObiCard';


function herramienta(){

       const herramienta1={      
                img:'assets/images/herramienta.png' ,   
                href:'https://www.argentina.gob.ar/ciencia/vintec' ,
                titulo:'Vintec' ,                                    
                texto:'Brindamos herramientas claves para la transformación de datos en información útil para la toma de decisiones estratégicas y el aumento de la competitividad.' ,
                parrafo:'',
        }

        const herramienta2={      
                img:'assets/images/herramienta.png',   
                href:'https://www.wto.org/indexsp.htm' ,
                titulo:'Organizacion Mundial de Comercio',                                    
                texto:'La Organización Mundial del Comercio (OMC) es la única organización internacional que se ocupa de las normas que rigen el comercio entre los países.' ,
                parrafo:'',
        }

         const herramienta3={      
                img:'assets/images/herramienta.png',   
                href:'https://www.iadb.org/es/proyectos',
                titulo:'Banco Interamericano de Desarrollo',                                    
                texto:'Trabajamos para mejorar la calidad de vida en América Latina y el Caribe. Ayudamos a mejorar la salud, la educación y la infraestructura a través del apoyo financiero y técnico a los países que trabajan para reducir la pobreza y la desigualdad.',
                 parrafo:'',
        }
        const herramienta4={      
                img:'assets/images/herramienta.png',   
                href:'https://cordis.europa.eu/es',
                titulo:'CORDIS',                                    
                texto:'El Servicio de Información Comunitario sobre Investigación y Desarrollo (CORDIS) es la principal fuente de la Comisión Europea de los resultados de los proyectos financiados por los programas marco de investigación e innovación de la UE, desde el 1PM hasta Horizonte Europa.',
                 parrafo:'',
        }
        const herramienta5={      
                img:'assets/images/herramienta.png',   
                href:'https://www.ovtt.org/',
                titulo:'OVTT',                                    
                texto:'A través de esta plataforma virtual y el trabajo en red, ayudamos a investigadores, emprendedores y empresas a aprovechar el potencial estratégico de la información científica y tecnológica en su toma de decisiones, favoreciendo la construcción de redes de valor para la transformación digital.',
                 parrafo:'',
        }
        const herramienta6={      
                img:'assets/images/herramienta.png',   
                href:'https://biznar.com/biznar/desktop/en/search.html',
                titulo:'BizNar',                                    
                texto:'Deep Web Technologies es una empresa de software que se especializa en la creación de motores de búsqueda que explotan la Deep Web, la parte de Internet que no se puede buscar directamente a través de los motores de búsqueda web ordinarios.',
                 parrafo:'',
        }
        const herramienta7={      
                img:'assets/images/herramienta.png',   
                href:'https://search.carrot2.org/#/search/web',
                titulo:'Carrot2',                                    
                texto:'This is the demo application of the Carrot2 clustering engine. It uses Carrot2s algorithms to organize search results into thematic folders.',
                parrafo:'',
        }
        const herramienta8={      
                img:'assets/images/herramienta.png',   
                href:'https://www.sciencedirect.com/',
                titulo:'Science Direct',                                    
                texto:'Desde la ciencia fundamental hasta la investigación nueva y novedosa, descubra nuestra gran colección de publicaciones sobre ciencias físicas e ingeniería, que abarcan una variedad de disciplinas, desde la teoría hasta la aplicación.',
                parrafo:'',
        }
         const herramienta9={      
                img:'assets/images/herramienta.png',   
                href:'https://www.trademap.org/Index.aspx' ,
                titulo:'Trade Map',                                    
                texto:'Trade Map proporciona, en forma de tablas, gráficos y mapas, indicadores sobre el desempeño de las exportaciones, la demanda internacional, mercados alternativos y mercados competitivos, así como un directorio de empresas importadoras y exportadoras.',   
                parrafo:'',
        }

   
        return(
                <>

                        <Container className='herramienta-container'>
                            
                                <Row className='mt-5'>
                                        <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Unidad de Busqueda Inteligente</h1>                                
                                        
                                        <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta1}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta2}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta3}></ObiCard> 
                                        </Col>
                                </Row>
                                <Row className='mt-5'>
                                                         
                                        <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta4}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta5}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta6}></ObiCard> 
                                        </Col>
                                </Row>
                                <Row className='mt-5'>
                                                         
                                        <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta7}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta8}></ObiCard> 
                                        </Col>
                                         <Col className='mt-5 d-flex justify-content-center'>
                                                <ObiCard data={herramienta9}></ObiCard> 
                                        </Col>
                                </Row>
                                
                                

                        
                        </Container>   
                </>
        );
}


 export default herramienta;