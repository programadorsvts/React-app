import {Navigate} from 'react-router-dom'


export const ProtectedRoute = ({user,children}) =>{
    
    if ( user ){
        console.log(user);
        <Navigate to='/' />
    }
    return children
}