import {Container } from 'react-bootstrap';
import RestablecerFrom from './RestablecerForm';

function restablecer() {
  return (
    <>
        <Container>
            <img src="assets/svgs/Logo-Svts-blanco.svg" width="300" height="100" className="d-inline-block " alt=""/>
            <RestablecerFrom></RestablecerFrom>
        </Container>
    </>
  );
}

export default restablecer;