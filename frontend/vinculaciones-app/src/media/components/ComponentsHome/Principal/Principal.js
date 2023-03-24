import {Container} from 'react-bootstrap'
import Galeria from '../Galeria/Galeria';
import './principal.css' ;

function principal() {
  return (
    <Container fluid className="bg-home">
      <section className='container principal-body'>
        <h1 className="hero text-deg">Secretaría de Vinculación<br/>Tecnológica y Social</h1>
        <p className="encabezado-3 mt-5 w-75">Promovemos la apropiación social de conocimiento generado en el ámbito de la Universidad Nacional de San Luis, impulsando la vinculación del sector científico-tecnológico con su entorno socio-productivo</p>
        {/* <Galeria/> */}
      </section>
    </Container>
  );
}

export default principal;