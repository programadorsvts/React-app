import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VinculacionesCard({ data }) {
  const imagen = <Card.Img src={data.ruta} alt={data.titulo} className="vinculaciones-img" />;
  return (
    <Card className="vinculaciones-card">
      {data.interno ? (
        <Link to={data.link}>{imagen}</Link>
      ) : (
        <a href={data.link} target="_blank" rel="noreferrer">{imagen}</a>
      )}
    </Card>
  );
}
export default VinculacionesCard;
