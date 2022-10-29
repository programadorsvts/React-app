 import { BrowserRouter as Router ,/* Route */ } from "react-router-dom"; 


/* import observatorio from './media/pages/observatorio';
  import revistadigital from './media/pages/revistadigital' */
  /* import home from './media/pages/home' */
import NavBar from "./media/components/ComponentsHome/NavBar/NavBar"
import Principal from "./media/components/ComponentsHome/Principal/Principal";


 import 'bootstrap/dist/css/bootstrap.min.css'; 



function App() {

  return (
   
                <Router> 
                 
                  <NavBar></NavBar>
                  <Principal></Principal>
               
                </Router>   
  );
}

export default App;
