import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto'
import Buscador from '../components/ComponentsObservatorio/Buscador/Buscador'
import Proyecto from '../components/ComponentsObservatorio/Proyecto/Proyecto';
import NavBar from "../components/ComponentsHome/NavBar/NavBar";
import Footer from "../components/ComponentsHome/Footer/Footer";


function observatorio (){


    return(
            <>
            <NavBar></NavBar>
                <PrincipalObservatorio titulo="Observatorio SVTS"></PrincipalObservatorio>
                <CrearProyecto></CrearProyecto>
                <Buscador></Buscador>
                <Proyecto></Proyecto>
            <Footer></Footer>
            </>
    );
}


 export default observatorio