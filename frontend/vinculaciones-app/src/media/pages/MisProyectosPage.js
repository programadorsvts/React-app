import React from 'react'

import PrincipalObservatorio from '../components/ComponentsObservatorio/Principal/PrincipalObservatorio'
import CrearProyecto from '../components/ComponentsObservatorio/CrearProyecto/CrearProyecto';
import MisProyectos from '../components/ComponentsObservatorio/MisProyectos/MisProyectos';

const MisProyectosPage = () => {
  return (
    <>
   
    <PrincipalObservatorio titulo="Mis Proyectos"></PrincipalObservatorio>
    <CrearProyecto></CrearProyecto>
    <MisProyectos/>
  
    </>
  )
}

export default MisProyectosPage