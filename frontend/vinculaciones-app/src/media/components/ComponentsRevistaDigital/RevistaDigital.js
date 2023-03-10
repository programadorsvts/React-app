import {Row,Container, Col} from 'react-bootstrap';
import RevistaCard from '../ComponentsRevistaDigital/RevistaCard';

function revista(){
        const revista1=
        { 
                imagen:'assets/revistadigital/revista1.jpg',   
                link:'assets/revistadigital/revistapdf/Revista-1.pdf ',                                   
                titulo:'Volumen 1 - Numero 1 ',    
                fecha:'Junio 2020 ' , 
                isbn:''  
        }
        const revista2=
        { 
                imagen:'assets/revistadigital/revista2.jpg',   
                link:'assets/revistadigital/revistapdf/Revista-2.pdf ',                 
                titulo:'Volumen 1 - Numero 2',      
                fecha:'septiembre 2020' , 
                isbn:''  
        }
        const revista3=
        { 
                imagen:'assets/revistadigital/revista3.jpg',   
                link:'assets/revistadigital/revistapdf/Revista-3.pdf',                                      
                titulo:'Volumen 1 - Numero 3',      
                fecha:'diciembre 2020 ' , 
                isbn:''  
        }
        const revista4=
        { 
                imagen:'assets/revistadigital/revista4.jpg',   
                link:'assets/revistadigital/revistapdf/Revista-4.pdf ',    
                titulo:'Volumen 2 - Numero 4',      
                fecha:'Junio 2021 ' , 
                isbn:''  
        }
        const revista5=
        {  
                imagen:'assets/revistadigital/revista5.jpg',  
                link:'assets/revistadigital/revistapdf/Revista-5.pdf',                            
                titulo:'Volumen 2 - Numero 5' ,    
                fecha:'Diciembre 2021 ' , 
                isbn:''  
        }
          const revista6=
        {  
                imagen:'assets/revistadigital/revista6.jpg',  
                link:'assets/revistadigital/revistapdf/Revista-6.pdf',                            
                titulo:'Volumen 3 - Numero 6' ,    
                fecha:'Diciembre 2022 ' , 
                isbn:''  
        }
        
        return(
                <>
                        <Container>
                            <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Publicaciones</h1>
                            <Row   className='mt-5'>
                                  <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard data={revista6}></RevistaCard>

                                </Col>
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard data={revista5}></RevistaCard>

                                </Col>
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista4}></RevistaCard>

                                </Col>
                            </Row>

                             <Row   className='mt-5'>
                                 <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista3}></RevistaCard>

                                </Col>
                                <Col className='mt-5 d-flex justify-content-center'>

                                        <RevistaCard data={revista2}></RevistaCard>

                                </Col>
                                <Col className='mt-5  d-flex justify-content-center'>

                                        <RevistaCard data={revista1}></RevistaCard>

                                </Col>
                            </Row>
                        </Container>   
                </>
        );
}


 export default revista;