import {Button,Form} from 'react-bootstrap';
import '../../../styles/form.css';
import * as Yup from 'yup';
import { Formik,} from 'formik';

 export const Formulario = () => {

          const schema = Yup.object().shape({

           email:Yup.string().email('email no valido').required('el mail es requerido').trim('los espacio en blanco no estan permitidos '),
           name: Yup.string().min(2, 'nombre muy corto').max(30, 'el nombre supera la cantidad de caracteres').required('se requiere un nombre'),
           telephone: Yup.number().required('se requiere un telefono'),
           description: Yup.string().min(2, 'descripcion es muy corta').max(600, 'descripcion supera la cantidad de caracteres'),
           
           
          });
  

    return(
              <Formik  
                  validationSchema={schema}
                  initialValues={{
                      name:'',
                      email:'',
                      telephone:'',
                      description:'',
                  } }
                  onSubmit={values => {
                    alert(JSON.stringify(values, null, 2));
                  }}

              >    
              {({handleChange, handleSubmit,  values ,touched , errors}) => (
                    <Form className='form w-50' onSubmit={handleSubmit}>
                      
                          <Form.Group className="" controlId="Input1">
                            <Form.Label className="mt-2">Nombre</Form.Label>
                                <Form.Control 
                                  name='name' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.name}
                                  onChange={handleChange}
                                  isValid={touched.name && !errors.name}
                                  isInvalid={!!errors.name}
                                  />
                                <Form.Control.Feedback type='invalid'>
                                   {errors.name}
                                </Form.Control.Feedback>
                                
                        </Form.Group>

                          <Form.Group className="" controlId="Input2">
                            <Form.Label className="mt-2">Email</Form.Label>
                                <Form.Control 
                                  name='email' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.email}
                                  onChange={handleChange}
                                  isValid={touched.email && !errors.email}
                                  isInvalid={!!errors.email}
                                  />
                                  <Form.Control.Feedback type='invalid'>
                                   {errors.email  }
                                </Form.Control.Feedback>
                               
                              
                        </Form.Group>
                          <Form.Group className="" controlId="lInput3">
                            <Form.Label className="mt-2">Telefono</Form.Label>
                                <Form.Control 
                                  name='telephone' 
                                  type="text" 
                                  placeholder=""  
                                  value={values.telephone}
                                  onChange={handleChange}
                                  isValid={touched.telephone }
                                  isInvalid={!!errors.telephone}
                                  />
                                <Form.Control.Feedback type='invalid'>
                                  {errors.telephone}
                                </Form.Control.Feedback>
                          </Form.Group>


                        <Form.Group className="" controlId="Textarea">
                            <Form.Label className="mt-2">descripcion</Form.Label>
                          
                                <Form.Control  as="textarea" rows={9} 
                                   name='description' 
                                    placeholder=""  
                                    value={values.description}
                                    onChange={handleChange}
                                    isValid={touched.description}
                                    isInvalid={!!errors.description} 
                                 />  
                                <Form.Control.Feedback type='invalid'>
                                   {errors.description}
                                </Form.Control.Feedback> 
                                  
                        </Form.Group>
                        <Button className='mt-3' onClick={handleSubmit}>Enviar</Button>
                        <br/>
                        
                    </Form>
                
              )}
          </Formik>       
    )
};
 export default Formulario ;