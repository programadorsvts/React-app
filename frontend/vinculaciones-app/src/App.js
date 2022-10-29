import { BrowserRouter as Router } from "react-router-dom"; 
import NavBar from "./media/components/ComponentsHome/NavBar/NavBar"
import Principal from "./media/components/ComponentsHome/Principal/Principal";
import './media/styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router> 
      
      <NavBar></NavBar>
      <Principal></Principal>
    
    </Router>   
  );
}

export default App;
