 ///////////React Router Dom////////////////////
 import { BrowserRouter as Router ,Route,Routes  } from "react-router-dom"; 

/////////////////Pages/////////////////////////
import observatorio from './media/pages/observatorio';
import revistadigital from './media/pages/revistadigital' 
import home from './media/pages/home' 

import NavBar from "./media/components/ComponentsHome/NavBar/NavBar"
import Principal from "./media/components/ComponentsHome/Principal/Principal";

/////////////////Bootstrap/////////////////
 import 'bootstrap/dist/css/bootstrap.min.css'; 



function App() {

  return (
   
                <Router> 
                      <Routes>

                             <Route exact path="/" element={home} /> 

                              <Route exact path="/revistadigital" element={revistadigital} />

                              <Route exact path="/observatorio" element={observatorio} />
                              
                      </Routes>       
                </Router>   
  );
}

export default App;
