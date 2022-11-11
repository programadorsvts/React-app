
import {Button,Form} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import { useForm } from '../../hooks/useForm';
import '../../styles/form.css';

const initialForm ={
  email:'',
  password:'',
  passwordconfir:'',
};

//////////Funcion para poder validar los campos con expreciones regulares/////////////
const validationsForm=(form)=>{
    let errors ={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;
    let regexPassword = /^.{8,15}$/;

    if(!form.email.trim()){
        errors.email='ingrese un mail valido';
    } else if(!regexEmail.test(!form.email.trim())){
        errors.email='Ingrese un dominio de email valido';
    }

    if(!form.name.trim()){
        errors.name='el campo nombre es requerido';
    }else if(!regexName.test(!form.name.trim())){
        errors.name='Ingrese un nombre valido';
    }
    if(!form.comments.trim()){
        errors.comments='el campo nombre es requerido';
    }else if(!regexComments.test(!form.comments.trim())){
        errors.comments='cantidad de caracteres superada';
    }
    
     if(!form.password.trim()){
        errors.password='el campo contrase;a es requerido';
    }else if(!regexPassword.test(!form.password.trim())){
        errors.password='maximo de caracteres superado';
    }
     if(!form.passwordconfir.trim()){
        errors.passwordconfir='el campo contrase;a es requerido';
    }else if(!regexPassword.test(!form.passwordconfir.trim())){
        errors.passwordconfir='maximo de caracteres superado';
    }

};


///////////////////Formulario de registro///////////////////
const   SingUpForm =() => {

//////////////////Destructuracion del Hook useForm Personalizado///////////////////
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
         {errors.email && <p>{errors.email}</p> }
        <Form.Control  type="email" name='email' placeholder="ejemplo@gmail o @hotmail" onChange={handleChange}  value={form.email} required onBlur={handleBlur} />  
          
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
            {errors.password && <p>{errors.password}</p> }

      </Form.Group>

        <Form.Group className="mb-3" controlId="contraseñaconfig2" >
        <Form.Label className="encabezado-4 label">Confirmar contraseña:</Form.Label>

        <Form.Control 
              type="password" 
              name='passwordconfir' 
              placeholder=""
              onChange={handleChange} 
              value={form.passwordconfir}
              required
              onBlur={handleBlur}   
            />
          {errors.passwordconfir && <p>{errors.passwordconfir}</p> } 
        <Link  to="/LoginPage" className="text-4 link" >¿Ya tienes una cuenta? Iniciar Sesión</Link>

      </Form.Group>

      <Button className="btn btn-form" type='submit' value='Enviar'>Registrarse</Button>
    </Form>
  );
}

export default SingUpForm;