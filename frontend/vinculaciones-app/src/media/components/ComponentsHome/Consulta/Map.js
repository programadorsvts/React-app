
import { Map, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
i


 function mapa() {
    return(
            
            <Map center={{  latLng:'51.505', lng:'0.09' }} zoom={13} >
                        
                <TileLayer

                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'"
                        
                />
               
            </Map>
           
    );
 }


 
 export default mapa;