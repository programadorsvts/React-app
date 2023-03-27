import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto'
import Proyecto from '../components/ComponentsObservatorio/Proyecto/Proyecto';


function observatorio() {
        return (
                <>
                        <PrincipalObservatorio></PrincipalObservatorio>
                        <CrearProyecto></CrearProyecto>
                        <Proyecto></Proyecto>
                </>
        );
}
export default observatorio