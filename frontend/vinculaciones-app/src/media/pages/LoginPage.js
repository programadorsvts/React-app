import Login from '../components/ComponentsLogin/Login'
import NavBar from "../components/ComponentsHome/NavBar/NavBar";
import Footer from "../components/ComponentsHome/Footer/Footer";

function login (){
    return(
        <>
        <NavBar></NavBar>
            <Login></Login>
        <Footer></Footer>
        </>
    );
}


 export default login