
import {Button,Form} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import { useForm } from '../../hooks/useForm';
import '../../styles/form.css';

const initialForm ={
  email:'',
  password:'',
  passwordconfig:'',
};
const validationsForm=(form)=>{};

const   SingUpForm =() => {

const{   
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur, 
        handleSubmit,
      }=useForm(initialForm,validationsForm);


  return (
    <Form className="form" onSubmit={handleSubmit}>

      <h1 className="encabezado-3 title">Registrarse</h1>

      <Form.Group className="mb-3" controlId="correoregistro1" >

        <Form.Label className="encabezado-4 label" >Correo Electrónico:</Form.Label>
        <p className="text-5 label-secundary">Debe ser de formato unsl.edu.ar o email.unsl.edu.ar</p>
        <Form.Control 
            type="email" 
            name='email' 
            placeholder="ejemplo@unsl.com"
            onBlur={handleBlur} 
            onChange={handleChange} 
            
            required
            />

      </Form.Group>    


      <Form.Group className="mb-3" controlId="contraseñaregistro1" >

        <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
        <p className="text-5 label-secundary">Debe ser de mínino de 8 caracteres</p>

        <Form.Control 
              type="password" 
              name='password' 
              placeholder=""
              onBlur={handleBlur} 
              onChange={handleChange} 
              
              required
            />


      </Form.Group>

        <Form.Group className="mb-3" controlId="contraseñaconfig2" >
        <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>

        <Form.Control 
              type="password" 
              name='passwordconfig' 
              placeholder=""
              onBlur={handleBlur} 
              onChange={handleChange} 
              
              required
            />

        <Link  to="/LoginPage" className="text-4 link" >¿Ya tienes una cuenta? Iniciar Sesión</Link>

      </Form.Group>

      <Button className="btn btn-form" type='submit' value='Enviar'>Registrarse</Button>
    </Form>
  );
}

export default SingUpForm;