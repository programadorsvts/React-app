 ///////////React Router Dom////////////////////
 import { BrowserRouter as Router ,Route,Routes  } from "react-router-dom"; 

/////////////////Pages/////////////////////////
import Observatorio from './media/pages/Observatorio'
import RevistaDigital from './media/pages/RevistaDigital' 
import Home from './media/pages/Home' 
import NotFoundPage from './media/pages/NotFoundPage';
 
import NavBar  from "./media/components/ComponentsHome/NavBar/NavBar"
 import Footer from "./media/components/ComponentsHome/Footer/Footer"

/////////////////Bootstrap/////////////////
import "./media/styles/index.css"




function App() {

  return (
                <Router>  
                          <NavBar></NavBar>
                          
                      <Routes> 
                          
                              <Route exact path="/"  element={<Home/>} /> 

                              <Route exact path="/revistadigital" element={<RevistaDigital/>} />

                              <Route exact path="/observatorio" element={<Observatorio/>} />

                              <Route exact path=" * " element={<NotFoundPage/>} />
                               
                      </Routes>     

                       <Footer></Footer> 
                </Router>   
  );
}

export default App;
