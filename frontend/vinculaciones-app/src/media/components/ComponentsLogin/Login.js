import Container from 'react-bootstrap/Container';
import LoginForm from './LoginForm';

function login() {
  return (
    <>
        <Container className="d-flex flex-column align-items-center justify-content-center my-5">
            <img src="Vinculaciones-Frontend/assets/svgs/Logo-Svts-blanco.svg" width="300" height="100" className="d-inline-block mb-5" alt=""/>
            <LoginForm></LoginForm>
        </Container>
    </>


  );
}

export default login;