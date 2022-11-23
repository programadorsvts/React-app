import Container from 'react-bootstrap/Container';
import SingUpForm from './SingUpForm';

function singup() {
  return (
    <>
        <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <img src="assets/svgs/Logo-Svts-blanco.svg" width="300" height="100" className="d-inline-block mb-5" alt=""/>
            <SingUpForm></SingUpForm>
        </Container>
    </>
  );
}

export default singup;