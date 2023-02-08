import React  from "react";
import { useState,useContext} from "react";
import Axios  from "axios";

import Swal from 'sweetalert2'
/* import { useNavigate } from 'react-router-dom'; */

const MisProyectosContext =React.createContext();
const ProyectosContext =React.createContext();
const ProyectosPaginationContext =React.createContext();

 
export const useMisProyectosContext= ()=>{
    return useContext (MisProyectosContext );
}
export const useProyectosContext= ()=>{
    return useContext (ProyectosContext );
}
export const useSingProyectosPaginationContext=()=>{
    return useContext(ProyectosPaginationContext);
}

export function ProyectosProvider( {children } ){
          
    const [proyectos, setProyectos] = useState([ ])
/*     const navigate = useNavigate(); */
     
     ///////////////// Get Projects /////////////////////////////////
            const Proyectos= ()=> {
                Axios.get('http://127.0.0.1:8000/api/proyects')
                .then(response => {
                    setProyectos(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                    Swal.fire ({ icon: 'warning', title: 'Proyectos no encontrados',  timer: 2000 });
                })
                console.log('dentro de la funcion',proyectos)    
                return proyectos;
      
            }       
     /////////////////////////////////////////////////////////////
      
    return(
        <ProyectosContext.Provider value={Proyectos}>
            <MisProyectosContext.Provider value={Proyectos} >
                <ProyectosPaginationContext.Provider value={Proyectos} >
                        {children}
                </ProyectosPaginationContext.Provider>
            </MisProyectosContext.Provider>    
        </ProyectosContext.Provider>
    );
  }

  

  