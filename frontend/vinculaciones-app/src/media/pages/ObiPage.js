import Obi from "../components/ComponentsObi/Obi";
import '../components/ComponentsObi/obi.css'
import {Container} from 'react-bootstrap';


function obipage(){
    return(
        <>   
      
            <Container className="obi-container">
                <img src="assets/svgs/Logo-Svts-blanco.svg" alt=""/>
                <img src="assets/svgs/Escudo-UNSL-Blanco.svg" alt=""/>
                 <Obi></Obi>
            </Container>
           
            
   
        </>
    );
}
 export default obipage