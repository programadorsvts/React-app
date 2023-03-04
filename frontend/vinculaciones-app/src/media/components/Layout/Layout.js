import NavBar from "../ComponentsHome/NavBar/NavBar"
import Footer from '../ComponentsHome/Footer/Footer'


 const Layout =({children})=>{

   return(
    <>
             <NavBar/>
                {children}
            <Footer/>
    </>
    )
 }
 
 export default Layout