
import './media/style/personalizado.css'

import  NavBav from './media/components/NavBar/NavBar';
import  Principal from './media/components/Inicio/Principal'
import  Noticias from './media/components/Noticias/Noticias'
import Gestion from './media/components/Gestion/Gestion'
import Convocatorias from './media/components/Convocatorias/Convocatorias'
import Redes from './media/components/Redes/Redes';
import Vinculaciones from './media/components/Vinculaciones/Vinculaciones';
import Consulta from './media/components/Consulta/Consulta';



function App() {
  return (
    <div className="App bg-warning"  >
     
      <header className="App-header" >
           
       

              <NavBav ></NavBav>
              <Principal></Principal>
              <Noticias></Noticias>
              <Gestion></Gestion>
              <Convocatorias></Convocatorias>
              <Vinculaciones></Vinculaciones>
              <Redes></Redes>
              <Consulta></Consulta>

          
          
         
        
         

        
            
      </header>
    </div>
  );
}

export default App;
