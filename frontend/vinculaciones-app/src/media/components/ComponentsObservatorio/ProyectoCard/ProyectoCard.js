
import {Card} from 'react-bootstrap'
import './proyectocard.css';
import {useState} from 'react';

import ProyectoModal from '../ProyectoCard/ProyectoModal'


function ProyectoCard({proyecto}) {
  


  // const getArea = (area_id) => {
  //   console.log(areas)
  //   let area = areas.filter(area => area.id === area_id)
  //   return area[0].name
  // }
  
  const [modalShow, setModalShow] = useState(false);

  return (
      <>
        <Card className='card' onClick={() => setModalShow(true)}>
          <Card.Body>
            <Card.Text className='encabezado-4 text-lowercase'>
              {proyecto.title}
            </Card.Text>
            <Card.Title className='text-1 text-deg text-capitalize'>{}</Card.Title>
          </Card.Body>
        </Card>
        <ProyectoModal titulo={proyecto.title} show={modalShow} onHide={() => setModalShow(false)}/>
      </>
  );
}
export default ProyectoCard;


