///////////React Router Dom////////////////////
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Observatorio from './media/pages/ObservatorioPage'
import RevistaDigital from './media/pages/RevistaDigitalPage'
import Home from './media/pages/Home'
import LoginPage from './media/pages/LoginPage'
import SingUpPage from './media/pages/SingUpPage'
import NotFoundPage from './media/pages/NotFoundPage'
import HerramientasPage from './media/pages/HerramientasPage'
import CrearProyectoPage from "./media/pages/CrearProyectoPage";
import Restablecer from './media/components/ComponentsRestablecerPass/Restablecer'
import "./media/styles/index.css"
import Axios from "axios";
import RegistroExitoso from "./media/pages/RegistroExitoso";
import MisProyectosPage from "./media/pages/MisProyectosPage";

Axios.defaults.baseURL = 'http://127.0.0.1:8000/'
Axios.defaults.headers.post['Accept'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'application/json'
Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('local-token')
  if(token){
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
})

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/RevistaDigitalPage" element={<RevistaDigital />} />
        <Route exact path="/ObservatorioPage" element={<Observatorio />} />
        <Route exact path="/HerramientasPage" element={<HerramientasPage/>}/>
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SingUpPage" element={<SingUpPage />} />
        <Route exact path="/CrearProyectoPage" element={<CrearProyectoPage />} />
        <Route exact path="/mis-proyectos" element={<MisProyectosPage />} />
        <Route exact path='/RestablecerPage' element={<Restablecer/>}/>
        <Route exact path='/registro-exitoso' element={<RegistroExitoso/>}/>
        <Route exact path=" * " element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
