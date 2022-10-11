
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import  NavBav from 'components/NavBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button>Boton</Button>
          <NavBar></NavBar>
      </header>
    </div>
  );
}

export default App;
