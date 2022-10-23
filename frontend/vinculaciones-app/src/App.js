
import './media/style/personalizado.css'

import  NavBav from './media/components/ComponentsHome/NavBar/NavBar';
import  Principal from './media/components/ComponentsHome/Principal/Principal'
import  Noticias from './media/components/ComponentsHome/Noticias/Noticias'
import Gestion from './media/components/ComponentsHome/Gestion/Gestion'
import Convocatorias from './media/components/ComponentsHome/Convocatorias/Convocatorias'
import Redes from './media/components/ComponentsHome/Redes/Redes';
import Vinculaciones from './media/components/ComponentsHome/Vinculaciones/Vinculaciones';
import Consulta from './media/components/ComponentsHome/Consulta/Consulta';
import Map from './media/components/ComponentsHome/Consulta/Map'


function App() {
  return (
    <div className="App bg-warning"  >
     
      
           
       

              <NavBav ></NavBav>
              <Principal></Principal>
              <Noticias></Noticias>
              <Gestion></Gestion>
              <Convocatorias></Convocatorias>
              <Vinculaciones></Vinculaciones>
              <Redes></Redes>
              <Consulta></Consulta>
              <Map></Map>

          
          
         
      

    </div>
  );
}

export default App;
