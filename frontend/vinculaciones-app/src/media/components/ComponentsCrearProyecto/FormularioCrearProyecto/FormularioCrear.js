import {Button,Form,Container} from 'react-bootstrap'
import {Link} from  'react-router-dom';
import * as Yup from 'yup';
import { Formik} from 'formik';
import axios from 'axios';

import '../../../styles/form.css';


const schema = Yup.object().shape({

           email:Yup.string().email('email no valido').required('el mail es requerido').trim('los espacio en blanco no estan permitidos '),
           
           password: Yup.string()
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),

           confir:Yup.string().oneOf([Yup.ref('password'), null], 'las contrasenas no son iguales')
            .required('se requiere una contraseña.') 
            .min(8, 'contraseña no valida - minimo 8 caracteres.')
            .trim('los espacio en blanco no estan permitidos '),
    
          });




function formulariocrear() {
  return (
     <Formik       
        validationSchema={schema}
            initialValues={{
                ///////Formulario Informacion del Proyecto////////
                titulo:'',
                director:'',
                organi:'',      
                area:'',    

                 //Formulario Informacion de Contacto//////////    
                 email:'',
                 telefono:'',
                 direccion:'',
                 descripcion:'',

            } }
            onSubmit={values => {alert(JSON.stringify(values, null, 2));}}
            >    
          
            {({handleChange, handleSubmit,  values ,touched , errors}) => (
                    <Container className='mt-5'>
                        <Form className="form ">
                        <h1 className="encabezado-2 title">Crear Nuevo Proyecto</h1>

                        {/*--------------------Formulario Informacion del Proyecto----------------*/}
                        <Form.Group className="mb-3" controlId="titulo1" >
                            <Form.Label className="encabezado-4 label" ></Form.Label>
                            <h1 className="encabezado-4 ">Titulo</h1>
                            <p className="text-5 label-secundary">(maximo 60 caracteres)</p>
                            <Form.Control type="text" placeholder="" 
                                type="text"
                                name='titulo'
                                placeholder="" 
                                onChange={handleChange}  
                                value={values.titulo} 
                                isValid={touched.titulo && !errors.titulo}
                                isInvalid={!!errors.titulo}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.titulo}
                                </Form.Control.Feedback>
                        </Form.Group>    


                        <Form.Group className="mb-3" controlId="director1" >
                            <Form.Label className="encabezado-4 label" ></Form.Label>
                            <h1 className="encabezado-4 "> Nombre de el/la director/a:</h1>
                            <p className="text-5 label-secundary">(maximo 8 caracteres)</p>
                            <Form.Control 
                                type="text"
                                name='director'
                                placeholder="" 
                                onChange={handleChange}  
                                value={values.director} 
                                isValid={touched.director && !errors.director}
                                isInvalid={!!errors.director}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {errors.director}
                                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="tipo1" >
                            <Form.Label className="encabezado-4 label" ></Form.Label>
                            <h1 className="encabezado-4 ">Tipo de Organizacion:</h1>
                                <Form.Select >
                                    <option
                                            type="text"
                                            name='opcion'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.Orgaopcion} 
                                            isValid={touched.Orgaopcion && !errors.Orgaopcion}
                                            isInvalid={!!errors.Orgaopcion}
                                    >
                                             Opcion 1
                                    </option>
                                     <option
                                            type="text"
                                            name='Orgaopcion'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.select} 
                                            isValid={touched.Orgaopcion && !errors.Orgaopcion}
                                            isInvalid={!!errors.Orgaopcion}
                                    >
                                             Opcion 2
                                    </option>
                                </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="area1" >
                            <Form.Label className="encabezado-4 label" ></Form.Label>
                            <h1 className="encabezado-4 ">Area tematica:</h1>
                                <Form.Select >
                                    <option
                                            type="text"
                                            name='area'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.area} 
                                            isValid={touched.area && !errors.area}
                                            isInvalid={!!errors.Orgaopcion}
                                    >
                                             Opcion 1
                                    </option>
                                    <option
                                            type="text"
                                            name='area'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.area} 
                                            isValid={touched.area && !errors.area}
                                            isInvalid={!!errors.Orgaopcion}
                                    >
                                             Opcion 2
                                    </option>
                                    <option
                                            type="text"
                                            name='area'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.area} 
                                            isValid={touched.area && !errors.area}
                                            isInvalid={!!errors.area}
                                    >
                                             Opcion 3
                                    </option>
                                    <option
                                            type="text"
                                            name='area'
                                            placeholder="" 
                                            onChange={handleChange}  
                                            value={values.area} 
                                            isValid={touched.area && !errors.area}
                                            isInvalid={!!errors.area}
                                    >
                                             Opcion 4
                                    </option>
                                </Form.Select>
                        </Form.Group>


                        {/*--------------------Formulario Informacion del Contacto----------------*/}
                        <Form.Group className="" controlId="contacto1" >
                            <Form.Label className="encabezado-4 label"></Form.Label>
                            <h1 className="encabezado-2 title">Contacto</h1>
                            <h1 className="encabezado-4 ">Correo Electronico:</h1>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="" controlId="telefono1" >
                            <Form.Label className="encabezado-4 label"></Form.Label>
                            <h1 className="encabezado-4 ">Telefono:</h1>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="" controlId="direccion1" >
                            <Form.Label className="encabezado-4 label"></Form.Label>
                            <h1 className="encabezado-4 ">Direccion:</h1>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>


                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="encabezado-4 label">Descripcion</Form.Label>
                            <Form.Control as="textarea" rows={10} />
                        </Form.Group>   

                        <Button className="btn btn-form mt-5" type='submit' onClick={handleSubmit} value='Enviar'>Crear Proyecto</Button>
                        </Form>
                    </Container>    
                )}
        </Formik>         
  );
}

export default formulariocrear;