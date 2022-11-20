import {Row,Container, Col} from 'react-bootstrap';
import RevistaCard from '../ComponentsRevistaDigital/RevistaCard';

function revista(){
        const revista1={ imagen:'/assets/revistadigital/Revista1.jpg',   link:'https://svts.unsl.edu.ar/pdf/UNSL2.0-Jun20.pdf ',                                    titulo:'Volumen 1 - Numero 1 ',    fecha:'Junio 2020 ' , isbn:''  }
        const revista2={ imagen:'/assets/revistadigital/Revista2.jpg',   link:'https://svts.unsl.edu.ar/pdf/Sept20-Rev.N2-iUNSL2.0-3.pdf ',                 titulo:'Volumen 1 - Numero 2',      fecha:'septiembre 2020' , isbn:''  }
        const revista3={ imagen:'/assets/revistadigital/Revista3.jpg',   link:'https://svts.unsl.edu.ar/pdf/iunsl2.0-No3.-.pdf',                                      titulo:'Volumen 1 - Numero 3',      fecha:'diciembre 2020 ' , isbn:''  }
        const revista4={ imagen:'/assets/revistadigital/Revista4.jpg',   link:'https://svts.unsl.edu.ar/pdf/iUNSL2.0%20No4.%20-comprimido.pdf',    titulo:'Volumen 2 - Numero 4',      fecha:'Junio 2021 ' , isbn:''  }
        const revista5={  imagen:'/assets/revistadigital/Revista5.jpg',  link:'https://svts.unsl.edu.ar/pdf/Iunsl%202.0%20No5.pdf',                            titulo:'Volumen 2 - Numero 5' ,    fecha:'Diciembre 2021 ' , isbn:''  }
        
        return(
                <>
                        <Container>
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Publicaciones</h1>
                            <Row   className='mt-5  '>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard data={revista1}></RevistaCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista2}></RevistaCard>

                                </Col>
                                
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista3}></RevistaCard>

                                </Col>
                            </Row>
                             <Row   className='mt-5 '>
                                
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard data={revista4}></RevistaCard>

                                </Col>
                            
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista5}></RevistaCard>

                                </Col>
                            </Row>
                        </Container>   
                </>
        );
}


 export default revista;