
import './media/style/personalizado.css'
import  NavBav from './media/components/NavBar/NavBar';
import  Inicio from './media/components/Inicio/Inicio'
import  Noticias from './media/components/Noticias/Noticias'
import Gestion from './media/components/Gestion/Gestion'
import Convocatorias from './media/components/Convocatorias/Convocatorias'




function App() {
  return (
    <div className="App" >
     
      <header className="App-header" >
           
       
          
          <NavBav ></NavBav>
          <Inicio></Inicio>
          
          <Noticias></Noticias>
          <Gestion></Gestion>
          <Convocatorias></Convocatorias>
        
         

        
            
      </header>
    </div>
  );
}

export default App;
