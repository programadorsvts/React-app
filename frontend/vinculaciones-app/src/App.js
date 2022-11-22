///////////React Router Dom////////////////////
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/////////////////Pages/////////////////////////
import Observatorio from './media/pages/ObservatorioPage'
import RevistaDigital from './media/pages/RevistaDigitalPage'
import Home from './media/pages/Home'
import LoginPage from './media/pages/LoginPage'
import SingUpPage from './media/pages/SingUpPage'
import NotFoundPage from './media/pages/NotFoundPage'
import HerramientasPage from './media/pages/HerramientasPage'
import CrearProyectoPage from "./media/pages/CrearProyectoPage";
import Restablecer from './media/components/ComponentsRestablecerPass/Restablecer'
import NavBar from "./media/components/ComponentsHome/NavBar/NavBar"
import Footer from "./media/components/ComponentsHome/Footer/Footer";

/////////////////Bootstrap/////////////////
import "./media/styles/index.css"




function App() {

  return (
    <Router>
      <NavBar></NavBar>

      <Routes>

        <Route exact path="/Vinculaciones-Frontend/" element={<Home />} />

        <Route exact path="/RevistaDigitalPage" element={<RevistaDigital />} />

        <Route exact path="/ObservatorioPage" element={<Observatorio />} />

        <Route exact path="/HerramientasPage" element={<HerramientasPage/>}/>

        <Route exact path="/LoginPage" element={<LoginPage />} />

        <Route exact path="/SingUpPage" element={<SingUpPage />} />

        <Route exact path="/CrearProyectoPage" element={<CrearProyectoPage />} />

        <Route exact path='/RestablecerPage' element={<Restablecer/>}/>

        <Route exact path=" * " element={<NotFoundPage />} />

      </Routes>

      <Footer></Footer>
    </Router>
  );
}

export default App;
