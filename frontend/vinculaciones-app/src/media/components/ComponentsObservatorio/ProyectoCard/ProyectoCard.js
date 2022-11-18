
import {Card} from 'react-bootstrap'
import './card.css';
import {useState} from 'react';

import ProyectoModal from '../ProyectoCard/ProyectoModal'


function ProyectoCard(props) {
      const [modalShow, setModalShow] = useState(false);

  return (
      <>
              <Card className='card' onClick={() => setModalShow(true)}>
                <Card.Body>
                  <Card.Text className='encabezado-4'>
                    {props.titulo}
                  </Card.Text>
                  <Card.Title className='text-1 text-deg text-capitalize'>{props.area}</Card.Title>
                </Card.Body>
              </Card>
                
                <ProyectoModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>       
  );
}
export default ProyectoCard;


