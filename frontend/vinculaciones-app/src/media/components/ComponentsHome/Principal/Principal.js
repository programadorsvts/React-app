import {Container} from 'react-bootstrap'
import Galeria from '../Galeria/Galeria';
import './principal.css' ;

function principal() {
  return (
    <Container fluid className="bg-home">
      <Container className='principal-body'>
        <h1 className="hero text-deg">Secretaría de Vinculación<br/>Tecnologica y Social</h1>
        <h2 className="encabezado-3 mt-5 w-75">Promovemos la apropiación social de conocimiento generado en el ámbito de la Universidad Nacional de San Luis, impulsando la vinculación del sector cientifico-tecnológico con su entorno socio-productivo</h2>
        <Galeria/>
      </Container>
    </Container>
  );
}

export default principal;