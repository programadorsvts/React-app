import {Row,Col} from 'react-bootstrap';
import GestionCard from './GestionCard'

function gestion() {
        
        const gestion1={
                imagen:'assets/svgs/gestion-1.svg',
                titulo:'Informe de autoevaluación',
                ruta:'https://svts.unsl.edu.ar/pdf/INFORME%20DE%20AUTOEVALUACION-2021.pdf'
        };
        const gestion2={
                imagen:'assets/svgs/gestion-2.svg',
                titulo:'Servicios Tecnológicos de Alto Nivel',
                ruta:'https://svts.unsl.edu.ar/pdf/STAN.pdf'
        };
        const gestion3={
                imagen:'assets/svgs/gestion-3.svg',
                titulo:'Acreditación como Incubadora',
                ruta:'https://svts.unsl.edu.ar/pdf/Acreditacion.pdf'
        };
        return (
        
        <section className='container d-flex align-items-center flex-column'>
                <h2 className="encabezado-1 text-center my-5">Gestión</h2>
                <Row className='d-flex align-items-center' >
                        <Col className='d-flex justify-content-center'>
                                <GestionCard info={ gestion1}></GestionCard>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                                <GestionCard info={ gestion2}></GestionCard>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                                <GestionCard info={ gestion3}></GestionCard>
                        </Col>
                </Row>
    </section>



  );
}

export default gestion;