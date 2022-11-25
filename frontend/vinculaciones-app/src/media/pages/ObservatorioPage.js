import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto'
import Buscador from '../components/ComponentsObservatorio/Buscador/Buscador'
import Proyecto from '../components/ComponentsObservatorio/Proyecto/Proyecto';

import { Navigate } from 'react-router-dom';


function observatorio ( ){
        return( 
                <>
                    <PrincipalObservatorio></PrincipalObservatorio>
                    <CrearProyecto></CrearProyecto>
                    <Buscador></Buscador>
                    <Proyecto></Proyecto>
                </>
        );
}


 export default observatorio