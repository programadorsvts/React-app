import Container from 'react-bootstrap/container'
import './principalobservatorio.css' ;

function principalobservatorio() {
  return (
      
      <header>
            <Container fluid className="principal-body ">
                  <img src="/assets/svgs/Logo-ObservaSVTS-blanco.svg" alt=""/>
                  <img src="/assets/svgs/Logo-Svts-blanco.svg" alt=""/>
                  <img src="/assets/svgs/Escudo-UNSL-Blanco.svg" alt=""/>
                  <h1 className="encabezado-1 mt-5">Observatorio SVTS</h1>
            </Container>
      </header>
  );
}
export default principalobservatorio;