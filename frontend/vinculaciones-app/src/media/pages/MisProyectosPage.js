import React from 'react'
import NavBar from '../components/ComponentsHome/NavBar/NavBar'
import Footer from "../components/ComponentsHome/Footer/Footer";
import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto';
import MisProyectos from '../components/ComponentsObservatorio/MisProyectos/MisProyectos';

const MisProyectosPage = () => {
  return (
    <>
    <NavBar></NavBar>
    <PrincipalObservatorio titulo="Mis Proyectos"></PrincipalObservatorio>
    <CrearProyecto></CrearProyecto>
    <MisProyectos/>
    <Footer></Footer>
    </>
  )
}

export default MisProyectosPage