import React  from "react";
import { useState,useContext} from "react";
import Axios  from "axios";


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
export const useProyectosPerPageContext=()=>{
    return useContext(ProyectosPaginationContext);
}

export function ProyectosProvider( {children } ){
          
    const [proyectos, setProyectos] = useState([])
/*     const navigate = useNavigate(); */
     
     ///////////////// Get Projects /////////////////////////////////
            /* const Proyectos( async()=>{
                Await Axios.get('http://127.0.0.1:8000/api/proyects?page=1&to=1').then( (response)=> {                     
                        setProyectos(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire ({ icon: 'warning', title: 'Proyectos no encontrados',  timer: 2000 });
                    })
                console.log('cartel deltro del provider 1',proyectos)
                return proyectos;
      
            })     */   

            const  Proyectos = async () => {
                try {
                    const response = await Axios.get('http://127.0.0.1:8000/api/proyects?page=1&to=1');
                   
                    setProyectos(response.data)
                     console.log('Cartel deltro del try',proyectos);

                } catch (err) {
                    console.error(err);
                }
            };
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

  

  