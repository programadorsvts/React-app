/////////////////////////////React Router Dom////////////////////////////////////
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ProtectedRoute} from './media/components/ProtectedRoute/ProtectedRoute'
/////////////////////////////AXIOS////////////////////////////////////////////////
import Axios from "axios";
///////////////////////Pages/////////////////////////////////////////
import Observatorio from './media/pages/ObservatorioPage'
import RevistaDigital from './media/pages/RevistaDigitalPage'
import Home from './media/pages/Home'
import LoginPage from './media/pages/LoginPage'
import SingUpPage from './media/pages/SingUpPage'
import NotFoundPage from './media/pages/NotFoundPage'
import HerramientasPage from './media/pages/ObiPage'
import CrearProyectoPage from "./media/pages/CrearProyectoPage";
import Restablecer from './media/components/ComponentsRestablecerPass/Restablecer'
import MisProyectosPage from './media/pages/MisProyectosPage'
import Layout from './media/components/Layout/Layout'
/////////////////Bootstrap/////////////////////////////////
import "./media/styles/index.css"
/////////////////Imports//////////////////////////////////
import { useState} from 'react';
import { LoginProvider}  from "./LoginProvider";


/////////////////TOKEN/////////////////////////////////
  Axios.defaults.baseURL = 'http://127.0.0.1:8000'
  Axios.defaults.headers.post['Accept'] = 'application/json'
  Axios.defaults.headers.post['Content-Type'] = 'application/json'

  Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('local-token')
    if(token){
      config.headers.Authorization = token ? `Bearer ${token}` : ''
    }
    return config
  })
///////////////////////////////////////////////////////

function App() {
  const [user,SetUser] = useState(false)
  

  return (
     <LoginProvider>
        <Router>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/RevistaDigitalPage" element={<RevistaDigital />} />

                <Route exact path="/ObservatorioPage"  element={
                              <ProtectedRoute user={ user }>
                                    
                                    <Observatorio />
                                    
                              </ProtectedRoute>
                  }/>

                <Route exact path="/ObiPage" element={<HerramientasPage/>}/>

                <Route exact path="/LoginPage" element={<LoginPage user={user} />} />

                <Route exact path="/SingUpPage" element={<SingUpPage />} />

              <Route exact path="/MisProyectosPage" element={<MisProyectosPage/>} />

                <Route exact path="/CrearProyectoPage"  element={
                              <ProtectedRoute user={user}>
                                    
                                    <CrearProyectoPage/>

                              </ProtectedRoute>
                  }/>


                <Route exact path="/RestablecerPage"  element={
                          <ProtectedRoute user={user}>
                                
                                <Restablecer/>

                          </ProtectedRoute>
                  }/>

                <Route exact path=" * " element={<NotFoundPage />} />
              </Routes>
            </Layout>  
        
        </Router>
       </LoginProvider>  
    

  );
}

export default App;
