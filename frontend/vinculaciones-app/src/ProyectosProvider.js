import React  from "react";
import { useState,useContext} from "react";
import Axios  from "axios";

import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

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

export function LoginProvider( {children } ){
          
    const [auth, setAuth] = useState(null);
    const [errorSubmit, setErrorSubmit] = useState("");
    const navigate = useNavigate();
     
     /////////////////User Auth/////////////////////////////////
            const AuthUser= ()=> {
                Axios.get('/sanctum/csrf-cookie' ).then(response => {
                        Axios.get('http://127.0.0.1:8000/api/checkAuth' )
                        .then((response) => {
                            console.log(response)
                            
                            setAuth(true);
                        })
                        .catch((error)=> {
                            console.log(error.messages);
                            setAuth(false);
                        })
                    }); 
                return auth;
            }       
     /////////////////////////////////////////////////////////////
      
    return(
        <ProyectosContext.Provider value={}>
            <MisProyectosContext.Provider value={}>
                <SingProyectosPaginationContext.Provider value={}>
                        {children}
                </SingProyectosPaginationContext.Provider>
            </MisProyectosContext.Provider>    
        </ProyectosContext.Provider>
    );
  }

  

  