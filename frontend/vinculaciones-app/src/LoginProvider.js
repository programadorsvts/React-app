import React  from "react";
import { useState,useContext } from "react";
import Axios  from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const LoginContext =React.createContext();
const LogOutContext =React.createContext();
const AuthUserContext =React.createContext();
 
export const useLoginContext= ()=>{
    return useContext (LoginContext );
}
export const useLogOutContext= ()=>{
    return useContext (LogOutContext );
}
export const useAuthUserContext= ()=>{
    return useContext (AuthUserContext );
}
export function LoginProvider( {children } ){

     const [auth, setAuth] = useState(null);
      const [errorSubmit, setErrorSubmit] = useState("");
     const navigate = useNavigate();

     /////////////////User Auth/////////////////////////////////
    const  AuthUser= ()=> {
                Axios.get('/api/checkAuth')
                .then((response) =>{
                    setAuth(true);
                })
                .catch((error) =>{
                   setAuth(false);
                   /*  console.log(error); */ /* Tengo que averiguar por que se Ejecuta esta peticion 4 veces al principio de la Pagina */
                })   
                return auth
    }          
     /////////////////////////////////////////////////////////////
      
     ///////////////////Log In///////////////////////////////////
     const LogUser = (email,password) => {
        Axios.post('/api/login', { "email":email,"password": password})
        .then((response) => {
            console.log(response);
            localStorage.setItem('local-email', email);
            localStorage.setItem('local-token', response.data.token);
            Swal.fire ({ icon: 'success', title: 'Sesion Iniciada Correctamente', showConfirmButton: false, timer: 2000 });
            navigate("/");
        })
         .catch((error) => {
            console.log(error.response)
            setErrorSubmit(error.response.data.message)
        })
         return errorSubmit
    }
     /////////////////////////////////////////////////////////////

     /////////////////Login Out/////////////////////////////////
    const LogOutUser = (sumiterror) => { 
            Axios.post("/api/logout").then((response) => {
            localStorage.removeItem("local-token")
            localStorage.removeItem("local-email")
            setAuth(false);
            Swal.fire ({ title: 'Sesion Cerrada', showConfirmButton: false, timer: 2000 });
            navigate("/LoginPage");
            })
            .catch((error) => {
            console.log(error)
            
            })
           
    }
    ///////////////////////////////////////////////////////////
    return(
        <LoginContext.Provider value={LogUser}>
            <AuthUserContext.Provider value={AuthUser}>
                  <LogOutContext.Provider value={LogOutUser}>
                   {children}
            </LogOutContext.Provider>
            </AuthUserContext.Provider>
        </LoginContext.Provider>
    );
  }

  

  