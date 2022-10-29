 ///////////React Router Dom////////////////////
 import { BrowserRouter as Router ,Route,Routes  } from "react-router-dom"; 

/////////////////Pages/////////////////////////
import Observatorio from './media/pages/Observatorio'
import RevistaDigital from './media/pages/RevistaDigital' 
import Home from './media/pages/Home' 
import Login from './media/pages/Login'
import SingUp from './media/pages/SingUp'
import NotFoundPage from './media/pages/NotFoundPage'
 
import NavBar  from "./media/components/ComponentsHome/NavBar/NavBar"
import Footer from "./media/components/ComponentsHome/Footer/Footer";

/////////////////Bootstrap/////////////////
import "./media/styles/index.css"




function App() {

  return (
                <Router>  
                          <NavBar></NavBar>
                          
                      <Routes> 
                          
                              <Route exact path="/"  element={<Home/>} /> 

                              <Route exact path="/RevistaDigital" element={<RevistaDigital/>} />

                              <Route exact path="/Observatorio" element={<Observatorio/>} />
                              
                              <Route exact path="/Login " element={<Login/>} />
                              
                              <Route exact path="/SingUp" element={<SingUp/>} />

                              <Route exact path=" * " element={<NotFoundPage/>} />
                               
                      </Routes>     

                       <Footer></Footer> 
                </Router>   
  );
}

export default App;
