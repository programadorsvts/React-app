import NavBar from "../ComponentsHome/NavBar/NavBar"
import Footer from '../ComponentsHome/Footer/Footer'
 
 const layout =({children})=>{
   return(
    <>
        <NavBar/>
            {children}
        <Footer/>
    </>
    )
 }
 
 