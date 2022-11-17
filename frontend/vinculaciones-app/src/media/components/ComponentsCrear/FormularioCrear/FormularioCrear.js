import {Button,Form,Container} from 'react-bootstrap'
import * as Yup from 'yup';
import { Formik} from 'formik';
import '../../../styles/form.css';



const schema = Yup.object().shape({
    titulo: Yup.string().min(5, 'titulo muy corto').max(60, 'el nombre supera la cantidad de caracteres').required('se requiere un nombre'),
    director: Yup.string().min(2, 'El nombre ingresado es muy corto'),
    email: Yup.string().email('email no valido').required('el mail es requerido').trim('los espacio en blanco no estan permitidos '),
    telephone: Yup.number().required('se requiere un telefono'),
    description: Yup.string().min(2, 'descripcion es muy corta').max(800, 'descripcion supera la cantidad de caracteres'),
});


function formulariocrear() {
  return (
     <Formik
        validationSchema={schema}
            initialValues={{
                titulo:'',
                director:'',
                organizacion:'',
                area:'',
                email:'',
                telefono:'',
                direccion:'',
                descripcion:'',
            } }
            onSubmit={values => {
                console.log("SUBMIT")
                alert(JSON.stringify(values, null, 2))
            }}
            >
          
            {({handleChange, handleSubmit, handleBlur, values ,touched , errors}) => (
            <Container className='mt-5'>
                <Form className="form ">
                <h1 className="encabezado-2 title">Crear Nuevo Proyecto</h1>

                <Form.Group className="mb-3" controlId="titulo1" >
                    <Form.Label className="encabezado-4 label" ></Form.Label>
                    <h1 className="encabezado-4 ">Titulo</h1>
                    <p className="text-5 label-secundary">(maximo 60 caracteres)</p>
                    <Form.Control 
                        type="text"
                        name='titulo'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.titulo} 
                        isValid={touched.titulo && !errors.titulo}
                        isInvalid={touched.titulo && errors.titulo}
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.director}
                    isValid={touched.director && !errors.director}
                    isInvalid={touched.director &&  errors.director}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.director}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="tipo1" >
                    <Form.Label className="encabezado-4 label" >Tipo de Organizacion</Form.Label>
                    <Form.Select 
                    name='organizacion'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.organizacion} 
                    isValid={touched.organizacion && !errors.organizacion}
                    isInvalid={touched.organizacion && errors.organizacion}>
                        <option value="0">seleccione opcion</option>
                        <option value="1">Opcion 1</option>
                        <option value="2">Opcion 2</option>
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
                        isInvalid={touched.area && errors.area}
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
                        isInvalid={touched.area && errors.area}
                        >
                            Opcion 2
                        </option>
                    </Form.Select>
                </Form.Group>


                {/*--------------------Formulario Informacion del Contacto----------------*/}
                <Form.Group className="" controlId="contacto1" >
                    <Form.Label className="encabezado-4 label"></Form.Label>
                    <h1 className="encabezado-2 title">Contacto</h1>

                    <h1 className="encabezado-4 ">Correo Electronico:</h1>
                    <Form.Control 
                        type="text"
                        name='email'
                        placeholder="" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} 
                        isValid={touched.email && !errors.email}
                        isInvalid={touched.email && errors.email}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="" controlId="telefono1" >
                    <Form.Label className="encabezado-4 label"></Form.Label>
                    <h1 className="encabezado-4 ">Telefono:</h1>
                    <Form.Control 
                        type="text"
                        name='telefono'
                        placeholder="" 
                        onChange={handleChange}  
                        value={values.telefono} 
                        isValid={touched.telefono && !errors.telefono}
                        isInvalid={touched.telefono && errors.telefono}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.telefono}
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="" controlId="direccion1" >
                    <Form.Label className="encabezado-4 label"></Form.Label>
                    <h1 className="encabezado-4 ">Direccion:</h1>
                    <Form.Control 
                        type="text"
                        name='direccion'
                        placeholder="" 
                        onChange={handleChange}  
                        value={values.direccion} 
                        isValid={touched.direccion && !errors.direccion}
                        isInvalid={touched.direccion && errors.direccion}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.direccion}
                        </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="encabezado-4 label">Descripcion</Form.Label>
                    <Form.Control as="textarea" rows={10} 
                        type="text"
                        name='descripcion'
                        placeholder="" 
                        onChange={handleChange}  
                        value={values.descripcion} 
                        isValid={touched.descripcion && !errors.descripcion}
                        isInvalid={touched.descripcion && errors.description}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {errors.description}
                        </Form.Control.Feedback>
                </Form.Group>
                
                <Button className="btn btn-form mt-5" type='submit' onClick={handleSubmit}>Crear Proyecto</Button>
                </Form>
            </Container>    
                )}
        </Formik>         
  );
}

export default formulariocrear;