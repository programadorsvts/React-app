
import "leaflet/dist/leaflet.css";
import { Marker, Popup} from 'react-leaflet'
import { MapContainer } from 'https://cdn.esm.sh/react-leaflet/MapContainer'
import { TileLayer } from 'https://cdn.esm.sh/react-leaflet/TileLayer'




 function mapa() {
    const position = [51.505, -0.09];
    return(
            
       
                
                    <MapContainer  className='leaflet-container' center={position} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
           
            
           
    );
 }


 
 export default mapa