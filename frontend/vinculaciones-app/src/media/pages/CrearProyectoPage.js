
import { Container } from "react-bootstrap";
import FormularioCrear from "../components/ComponentsCrear/FormularioCrear/FormularioCrear";
import NavBar from "../components/ComponentsHome/NavBar/NavBar";
import Footer from "../components/ComponentsHome/Footer/Footer";
function crearproyectopage(){
    return(
        <>
        <NavBar></NavBar>
        <FormularioCrear></FormularioCrear>
        <Footer></Footer>
        </>
    );
}


 export default crearproyectopage