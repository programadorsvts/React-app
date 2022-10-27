import Consulta from '../components/ComponentsHome/Consulta/Consulta';
import Convocatorias from '../components/ComponentsHome/Convocatorias/Convocatorias';
import Gestion from '../components/ComponentsHome/Gestion/Gestion';
import Noticias from '../components/ComponentsHome/Noticias/Noticias';
import Principal from '../components/ComponentsHome/Principal/Principal';
import Redes from '../components/ComponentsHome/Redes/Redes';
import Vinculaciones from '../components/ComponentsHome/Vinculaciones/Vinculaciones'



function home (){
    return(
        <>
            <Principal></Principal>;
            <Noticias></Noticias>;
            <Gestion></Gestion>;
            <Convocatorias></Convocatorias>;
            <Vinculaciones></Vinculaciones>;
            <Redes></Redes>;
            <Consulta></Consulta>;
            
        
        
        
        
        
        </>
    );
}


export default home