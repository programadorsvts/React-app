import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"

import './footer.css';

function footer() {
  return (
    <>
    <footer fluid className="footer">
            <div className="text-left" xs={12} md={4}>
                <h6 className="text-1">Información Institucional</h6>
                <img src="assets/svgs/Escudo-UNSL-Blanco.svg" width="150" height="100" alt=""/>  
                <p className='text-4'>Dirección: <a className="address" href="https://www.google.com/maps/place/Universidad+Nacional+de+San+Luis/@-33.2920509,-66.341365,17.6z/data=!4m9!1m2!2m1!1sunsl!3m5!1s0x95d4394eec782487:0x2bcfdfba83514ad4!8m2!3d-33.2921332!4d-66.3396195!15sCgR1bnNsWgYiBHVuc2ySAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJWT1daNk5ucFJSUkFC4AEA" target="_blank" rel="noopener noreferrer">Ejército de los Andes 950<br></br> San Luis, Argentina</a></p>
                <p className='text-4'>Telefono: +54 (0266) 4520300</p>
            </div>
            <div className="text-left"xs={12} md={4}>
                <h6 className="text-1">Contacto</h6>
                <img src="assets/svgs/Logo-Svts-blanco.svg" width="200" height="100" alt=""/>  
                <p>Ubicación: 1er Piso - Ala B</p>
                <p>Telefono: +54 (0266) 4520300</p>
                <p>Interno: 5159</p>
                <p>Email: svts.unsl@gmail.com</p>
            </div>
            <div className="text-left"xs={12} md={4}>
                <h6 className="text-1">Redes</h6>
                <Link className="m-2 icon" to="tel:+54 (0266) 4520300"><BsTwitter/></Link>
                <Link className="m-2 icon" to="tel:+54 (0266) 4520300"><BsFacebook/></Link>
                <Link className="m-2 icon" to="tel:+54 (0266) 4520300"><BsInstagram/></Link>
                <Link className="m-2 icon" to="tel:+54 (0266) 4520300"><BsYoutube/></Link>
            </div>
    </footer>
        <div className="copyright-body text-center ">
            <p className="text-5">&#169; COPYRIGHT 2021 Secretaría de Vinculación Tecnológica y Social (UNSL) <br/>Diseñado y desarrollado por Octavio Riccardo y Iván Agustín Lucero</p>
        </div>
    </>
);
}

export default footer;