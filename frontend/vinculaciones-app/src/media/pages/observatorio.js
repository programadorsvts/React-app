import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto'
import Buscador from '../components/ComponentsObservatorio/Buscador/Buscador'


function observatorio (){
    return(
            <>
            
                <PrincipalObservatorio></PrincipalObservatorio>
                <CrearProyecto></CrearProyecto>
                <Buscador></Buscador>
                
            
            </>
    );
}


 export default observatorio