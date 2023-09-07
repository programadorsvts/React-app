import { Row, Container, Col } from 'react-bootstrap';
import RevistaCard from '../ComponentsRevistaDigital/RevistaCard';

function revista() {
        const revista1 =
        {
                imagen: 'assets/images/revista1.webp',
                link: 'assets/revistadigital/revistapdf/Revista-1.pdf ',
                titulo: 'Volumen 1 - Número 1 ',
                fecha: 'Junio 2020 ',
                isbn: ''
        }
        const revista2 =
        {
                imagen: 'assets/images/revista2.webp',
                link: 'assets/revistadigital/revistapdf/Revista-2.pdf ',
                titulo: 'Volumen 1 - Número 2',
                fecha: 'septiembre 2020',
                isbn: ''
        }
        const revista3 =
        {
                imagen: 'assets/images/revista3.webp',
                link: 'assets/revistadigital/revistapdf/Revista-3.pdf',
                titulo: 'Volumen 1 - Número 3',
                fecha: 'diciembre 2020 ',
                isbn: ''
        }
        const revista4 =
        {
                imagen: 'assets/images/revista4.webp',
                link: 'assets/revistadigital/revistapdf/Revista-4.pdf ',
                titulo: 'Volumen 2 - Número 4',
                fecha: 'Junio 2021 ',
                isbn: ''
        }
        const revista5 =
        {
                imagen: 'assets/images/revista5.webp',
                link: 'assets/revistadigital/revistapdf/Revista-5.pdf',
                titulo: 'Volumen 2 - Número 5',
                fecha: 'Diciembre 2021 ',
                isbn: ''
        }
        const revista6 =
        {
                imagen: 'assets/images/revista6.webp',
                link: 'assets/revistadigital/revistapdf/Revista-6.pdf',
                titulo: 'Volumen 3 - Número 6',
                fecha: 'Diciembre 2022 ',
                isbn: ''
        }
        const revista7 =
        {
                imagen: 'assets/images/revista7.webp',
                link: 'assets/revistadigital/revistapdf/Revista7.pdf',
                titulo: 'Volumen 4 - Número 7',
                fecha: 'Septiembre 2023 ',
                isbn: ''
        }

        return (
                <>
                        <Container>
                                <h1 className='encabezado-2 encabezado-1 text-center mt-5'>Publicaciones</h1>
                                <Row className='mt-5'>
                                        <Col className='mt-5 d-flex justify-content-center'>

                                                <RevistaCard data={revista7}></RevistaCard>

                                        </Col>
                                        <Col className='mt-5 d-flex justify-content-center'>

                                                <RevistaCard data={revista6}></RevistaCard>

                                        </Col>
                                        <Col className='mt-5  d-flex justify-content-center'>

                                                <RevistaCard data={revista5}></RevistaCard>

                                        </Col>
                                </Row>
                                <Row className='mt-5'>
                                        <Col className='mt-5 d-flex justify-content-center'>

                                                <RevistaCard data={revista4}></RevistaCard>

                                        </Col>
                                        <Col className='mt-5 d-flex justify-content-center'>

                                                <RevistaCard data={revista3}></RevistaCard>

                                        </Col>
                                        <Col className='mt-5  d-flex justify-content-center'>

                                                <RevistaCard data={revista2}></RevistaCard>

                                        </Col>
                                </Row>
                                <Row className='mt-5'>
                                        <Col className='mt-5  d-flex justify-content-center'>

                                                <RevistaCard data={revista1}></RevistaCard>

                                        </Col>
                                </Row>
                        </Container>
                </>
        );
}


export default revista;