import Obi from "../components/ComponentsObi/Obi";
import Container from 'react-bootstrap/container'
import NavBar from "../components/ComponentsHome/NavBar/NavBar";
import Footer from "../components/ComponentsHome/Footer/Footer";

function obipage(){
    return(
        <>   
        <NavBar></NavBar>  
            <Container className="obi-container">
                <img src="assets/svgs/Logo-Svts-blanco.svg" alt=""/>
                <img src="assets/svgs/Escudo-UNSL-Blanco.svg" alt=""/>
                 <Obi></Obi>
            </Container>
           
            
        <Footer></Footer>
        </>
    );
}
 export default obipage