import {Card}from 'react-bootstrap';

function vinculacionescard(props) {
  return (
    <Card className='vinculaciones-card '>
      <a href={props.data.link}  rel="noreferrer">
        <Card.Img src={props.data.ruta} className='vinculaciones-img '/>
      </a>
    </Card>
  );
}

export default vinculacionescard;