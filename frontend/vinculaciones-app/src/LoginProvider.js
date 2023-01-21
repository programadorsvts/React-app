import React  from "react";
import { useState,useEffect,useContext } from "react";
import Axios from "axios";

 const LoginContext =React.createContext();
 const LogOutContext =React.createContext();
 

export const useLoginContext= ()=>{
    return useContext (LoginContext );
}
export const useLogOutContext= ()=>{
    return useContext (LogOutContext );
}

export function LoginProvider( {children } ){

     const [auth, setAuth] = useState(null);

     /////////////////Login Auth/////////////////////////////////
    const LogUser = () => {
        Axios.get('/api/checkAuth')
        .then((response) => {
        setAuth(true);
        })
        .catch((error) => {
        console.log(error)
        setAuth(false)
        })
    }
     //////////////////////////////////////////////////
    
    const LogOutUser = () => {
        Axios.post("/api/logout")
        .then((response) => {
        localStorage.removeItem("local-token")
        localStorage.removeItem("local-email")
        setAuth(false);
        })
        .catch((error) => {
        console.log(error)
        })
    }
  
    return(
        <LoginContext.Provider value={auth}>
            <LogOutContext.Provider value={auth}>
                   {children}
            </LogOutContext.Provider>
        </LoginContext.Provider>
    );
  }

  

  