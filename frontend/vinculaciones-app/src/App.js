
import './media/style/personalizado.css'



import  NavBav from './media/components/NavBar/NavBar';
import  Inicio from './media/components/Inicio/Inicio'
import  Noticias from './media/components/Noticias/Noticias'
/* import OffCanvas from './media/components/OffCanvas/OffCanvas' */


function App() {
  return (
    <div className="App" bg="secondary">
      <header className="App-header">
           
                
        <NavBav ></NavBav>
        <Inicio></Inicio>
        <Noticias></Noticias>

                

            
      </header>
    </div>
  );
}

export default App;
