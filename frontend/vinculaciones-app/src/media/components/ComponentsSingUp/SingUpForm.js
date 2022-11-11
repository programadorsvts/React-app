
import {Button,Form} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import { useForm } from '../../hooks/useForm';
import '../../styles/form.css';

const initialForm ={
  email:'',
  password:'',
  passwordconfig:'',
};

const validationsForm=(form)=>{
    let errors ={};

    if(!form.email.trim()){
      errors.email=' se necesita un email para registrarse';
      errors.password='se necesita una contraseña para registrarse '; 
      errors.password='se necesita una confirmacion de contraseña';
    }

};

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

      <Form.Group className="mb-3" controlId="CorreoSingUp" >

        <Form.Label className="encabezado-4 label" >Correo Electrónico:</Form.Label>
        <p className="text-5 label-secundary">Debe ser de formato @unsl.edu.ar</p>
        <Form.Control 
            type="email" 
            name='email' 
            placeholder="ejemplo@unsl.edu.ar"
            onChange={handleChange} 
            value={form.email} required
            onBlur={handleBlur} 
            />
           {/*  {errors.email && <p>{errors.email}</p> } */}
      </Form.Group>    


      <Form.Group className="mb-3" controlId="ContraseñaSingUp" >

        <Form.Label className="encabezado-4 label">Contraseña:</Form.Label>
        <p className="text-5 label-secundary">Debe ser de mínino de 8 caracteres</p>

        <Form.Control 
              type="password" 
              name='password' 
              placeholder=""
              onChange={handleChange} 
              value={form.password}
              required
              onBlur={handleBlur} 
            />

      </Form.Group>

        <Form.Group className="mb-3" controlId="contraseñaconfig2" >
        <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>

        <Form.Control 
              type="password" 
              name='passwordconfig' 
              placeholder=""
              onChange={handleChange} 
              value={form.passwordconfig}
              required
              onBlur={handleBlur}   
            />

        <Link  to="/LoginPage" className="text-4 link" >¿Ya tienes una cuenta? Iniciar Sesión</Link>

      </Form.Group>

      <Button className="btn btn-form" type='submit' value='Enviar'>Registrarse</Button>
    </Form>
  );
}

export default SingUpForm;