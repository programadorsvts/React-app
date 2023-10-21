import { Button, Form, Container } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import "../../../styles/form.css";
import "./form-crear.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { API_URL } from "../../../../config/env";

function FormularioCrear() {
  const bannerRef = useRef(null);

  const regExp = {
    telefono:
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  };

  const schema = Yup.object().shape({
    titulo: Yup.string()
      .min(5, "El titulo ingresado es demasiado corto")
      .max(150, "El Titulo ingresado es demasiado largo")
      .required("El Título es obligatorio"),
    director: Yup.string()
      .min(2, "El Nombre ingresado es demasiado corto")
      .required("El Director es obligatorio"),
    organizacion: Yup.number()
      .min(1, "Debe seleccionar un tipo de organización")
      .required("Debe seleccionar un tipo de organización"),
    area: Yup.number()
      .min(1, "Debe seleccionar un tipo de área tematica")
      .required("Debe seleccionar un tipo de área tematica"),
    email: Yup.string()
      .email("El valor ingresado no es un email")
      .required("el email es obligatorio")
      .trim("El email no permite espacios en blanco"),
    telefono: Yup.string()
      .matches(regExp.telefono, "El valor ingresado no es un telefono")
      .max(15),
    direccion: Yup.string().max(254, "La dirección es demasiado larga"),
    convocatoria: Yup.string().max(254, "La convocatoria es demasiado larga"),
    description: Yup.string()
      .min(2, "La descripción es demasiado corta")
      .max(4000, "La descripción es demasiado larga"),
    banner: Yup.mixed()
      .required("Una imagen es requerida")
      .test("FILE_SIZE", "El archivo es demasiado grande", (value) => {
        return value && value.size <= 10 * 1024 * 1024; // 10 MB
      })
      .test("FILE_FORMAT", "Formato no soportado", (value) => {
        return (
          value &&
          ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(
            value.type
          )
        );
      }),
  });
  //////////////////////////////////////////////////////////////

  const [previewSrc, setPreviewSrc] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (file) => {
    setPreviewSrc(URL.createObjectURL(file));
  };
  const navigate = useNavigate();
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    Axios.get(API_URL + "api/area")
      .then((response) => {
        console.log(response);
        setAreas(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        titulo: "",
        director: "",
        organizacion: "",
        area: "",
        email: "",
        telefono: "",
        direccion: "",
        descripcion: "",
        convocatoria: "",
        banner: "",
      }}
      onSubmit={(values) => {
        setIsSubmitting(true); 
        console.log("values.banner: ");
        console.log({
          fileName: values.banner.name,
          type: values.banner.type,
          size: `${values.banner.size} bytes`,
        });
        const formData = new FormData();
        formData.append("title", values.titulo);
        formData.append("director_name", values.director);
        formData.append("area_id", values.area);
        formData.append("organization", values.organizacion);
        formData.append("email", values.email);
        formData.append("phone_number", values.telefono);
        formData.append("address", values.direccion);
        formData.append("description", values.descripcion);
        formData.append("convocatoria", values.convocatoria);
        formData.append("banner", values.banner);

        Axios.get(API_URL + "sanctum/csrf-cookie").then((response) => {
          Axios.post(API_URL + "api/proyects", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
            .then((response) => {
              console.log(response);
              Swal.fire({
                icon: "success",
                title: "Proyecto creado exitosamente",
                showConfirmButton: true,
                timer: 6000,
              });
              navigate("/MisProyectosPage");
              setIsSubmitting(false);
            })
            .catch((error) => {
              console.log(error);
              Swal.fire({
                icon: "error",
                title: "Problemas al crear el Proyecto",
                showConfirmButton: true,
                timer: 6000,
              });
              navigate("/");
              setIsSubmitting(false);
            });
        });
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        setFieldValue,
        values,
        touched,
        errors,
      }) => (
        <Container className="mt-5 d-flex justify-content-center ">
          <Form className="form form-crear">
            <h1 className="encabezado-2 title">Crear Nuevo Proyecto</h1>
            <Form.Group className="mb-3">
              <Form.Label className="encabezado-4 label">Título: </Form.Label>
              <span className="text-4 label-secundary">
                {" "}
                (Máximo 150 caracteres)
              </span>
              <Form.Control
                type="text"
                name="titulo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.titulo}
                isValid={touched.titulo && !errors.titulo}
                isInvalid={touched.titulo && errors.titulo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.titulo}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="director1">
              <Form.Label className="encabezado-4 label">
                Nombre de el/la director/a:
              </Form.Label>
              <Form.Control
                type="text"
                name="director"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.director}
                isValid={touched.director && !errors.director}
                isInvalid={touched.director && errors.director}
              />
              <Form.Control.Feedback type="invalid">
                {errors.director}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="tipo1">
              <Form.Label className="encabezado-4 label">
                Tipo de Organización:
              </Form.Label>
              <Form.Select
                name="organizacion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organizacion}
                isValid={touched.organizacion && !errors.organizacion}
                isInvalid={touched.organizacion && errors.organizacion}
              >
                <option value={0}>seleccione tipo de organización</option>
                <option value={1}>Publica</option>
                <option value={2}>Privada</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.organizacion}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="area1">
              <Form.Label className="encabezado-4 label">
                Área tematica:
              </Form.Label>
              <Form.Select
                name="area"
                placeholder=""
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.area}
                isValid={touched.area && !errors.area}
                isInvalid={touched.area && errors.area}
              >
                <option value={0}>Seleccione área tematica</option>
                {areas.map((area) => {
                  return (
                    <option key={area.id} value={area.id}>
                      {area.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.area}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label className="encabezado-4 label my-3">
              Contacto:
            </Form.Label>
            <Form.Group className="mb-3" controlId="contacto1">
              <Form.Label className="encabezado-4 label">
                Correo Electrónico:
              </Form.Label>
              <Form.Control
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="telefono1">
              <Form.Label className="encabezado-4 label">Telefono:</Form.Label>
              <span className="text-4 label-secundary"> (Opcional)</span>
              <Form.Control
                type="text"
                name="telefono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefono}
                isValid={touched.telefono && !errors.telefono}
                isInvalid={touched.telefono && errors.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telefono}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="" controlId="direccion1">
              <Form.Label className="encabezado-4 label">Dirección:</Form.Label>
              <span className="text-4 label-secundary"> (Opcional)</span>
              <Form.Control
                type="text"
                name="direccion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.direccion}
                isValid={touched.direccion && !errors.direccion}
                isInvalid={touched.direccion && errors.direccion}
              />
              <Form.Control.Feedback type="invalid">
                {errors.direccion}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="" controlId="convocatoria">
              <Form.Label className="encabezado-4 label">
                Convocatoria:
              </Form.Label>
              <span className="text-4 label-secundary"> (Opcional)</span>
              <Form.Control
                type="text"
                name="convocatoria"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.convocatoria}
                isValid={touched.convocatoria && !errors.convocatoria}
                isInvalid={touched.convocatoria && errors.convocatoria}
              />
              <Form.Control.Feedback type="invalid">
                {errors.convocatoria}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="encabezado-4 label">
                Descripción:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                type="text"
                name="descripcion"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descripcion}
                isValid={touched.descripcion && !errors.descripcion}
                isInvalid={touched.descripcion && errors.description}
              />
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="encabezado-4 label">
                Subir Imagen:
              </Form.Label>
              <div
                className="dropzone"
                style={{
                  border: "2px dashed #cccccc",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  name="banner"
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    setFieldValue("banner", file);
                    handleFileUpload(file);
                  }}
                />
                {previewSrc ? (
                  <img
                    src={previewSrc}
                    alt="Vista previa"
                    style={{
                      width: "100%",
                      height: "auto",
                      marginTop: "10px",
                    }}
                  />
                ) : (
                  <p></p>
                )}
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.banner && touched.banner && errors.banner}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              className="btn btn-form mt-5"
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Crear Proyecto
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export default FormularioCrear;

{
  /*
  <div
                  className="dropzone"
                  style={{
                    border: "2px dashed #cccccc",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >

                  {previewSrc ? (
                    <img
                      src={previewSrc}
                      alt="Vista previa"
                      style={{
                        width: "100%",
                        height: "auto",
                        marginTop: "10px",
                      }}
                    />
                  ) : (
                    <p>
                      Arrastra y suelta una imagen aquí, o haz clic para
                      seleccionar una
                    </p>
                  )}
                </div>
                {selectedImage && <p>{selectedImage.name}</p>}

*/
}
