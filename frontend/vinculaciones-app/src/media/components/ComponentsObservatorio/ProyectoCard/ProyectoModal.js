import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { API_URL } from "../../../../config/env";
import './modal.css';

function ProyectoModal(props) {
    const [areas, setAreas] = useState([]);
    useEffect(() => {
    Axios.get(API_URL + "api/area")
        .then((response) => {
        setAreas(response.data);
        })
        .catch((err) => console.error(err));
    }, []);


    return (
        <>
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    {areas.map((area) => {
                    if (area.id===props.proyecto.area_id)
                    {
                         return(
                            <Modal.Title className='text-1 text-deg text-capitalize' id="contained-modal-title-vcenter">
                                {area.name}
                            </Modal.Title>

                        ); 
                    } else{return null}
              })}
                </Modal.Header>
                <Modal.Body className='text-description'>
                    <h4 className='encabezado-2 mb-3'>{props.proyecto.title}</h4>
                    <p className='encabezado-4 mb-1'>{props.proyecto.director_name}</p>
                    <p className='encabezado-4 mb-4'>Organización {props.proyecto.organization === 0 ? "Pública" : "Privada"}</p>
                    <p className='text-1 mb-1'>CONTACTO:</p>
                    <p className='text-2 mb-1'>{props.proyecto.email}</p>
                    <p className='text-2 mb-1'>{props.proyecto.phone_number}</p>
                    <p className='text-2 mb-4'>{props.proyecto.address}</p>
                    <p className='text-1 mb-1'>DESCRIPCIÓN:</p>
                    <p className='text-2 mb-1'>{props.proyecto.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProyectoModal;
