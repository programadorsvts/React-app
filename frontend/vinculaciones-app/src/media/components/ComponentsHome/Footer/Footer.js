
import { NavLink } from "react-router-dom"

import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"

import './footer.css';

function footer() {
    return (
        <>
            <footer className="footer">
                <div className="text-center" xs={12} md={4}>
                    <h6 className="text-1">Información Institucional</h6>
                    <img src="assets/svgs/Escudo-UNSL-Blanco.svg" width="150" height="100" alt="" />
                    <p className='text-4'>Dirección: <a className="address" href="https://www.google.com/maps/place/Universidad+Nacional+de+San+Luis/@-33.2920509,-66.341365,17.6z/data=!4m9!1m2!2m1!1sunsl!3m5!1s0x95d4394eec782487:0x2bcfdfba83514ad4!8m2!3d-33.2921332!4d-66.3396195!15sCgR1bnNsWgYiBHVuc2ySAQp1bml2ZXJzaXR5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJWT1daNk5ucFJSUkFC4AEA" target="_blank" rel="noopener noreferrer">Ejército de los Andes 950<br></br> San Luis, Argentina</a></p>
                    <p className='text-4'>Telefono: +54 (0266) 4520300</p>
                </div>
                <div className="text-center" xs={12} md={4}>
                    <h6 className="text-1">Contacto</h6>
                    <img src="assets/svgs/Logo-Svts-blanco.svg" width="200" height="100" alt="" />
                    <p>Ubicación: 1er Piso - Ala B</p>
                    <p>Telefono: +54 (0266) 4520300</p>
                    <p>Interno: 5159</p>
                    <p>Email: svtsInterno@gmail.com</p>
                </div>
                <div className="text-center" xs={12} md={4}>
                    <h6 className="text-1">Redes</h6>
                    <NavLink className="m-2 icon" to="https://twitter.com/svts72071168" target="_blank"><BsTwitter /></NavLink>
                    <NavLink className="m-2 icon" to="https://www.facebook.com/profile.php?id=100063927434371" target="_blank"><BsFacebook /></NavLink>
                    <NavLink className="m-2 icon" to="https://www.instagram.com/svts.unsl/?hl=es-la" target="_blank"><BsInstagram /></NavLink>
                    <NavLink className="m-2 icon" to="https://www.youtube.com/channel/UCXgAUfOL-tRfk4Wt_5bbnZQ" target="_blank"><BsYoutube /></NavLink>
                </div>
            </footer>
            <div className="copyright-body text-center ">
                <p className="text-5">&#169; COPYRIGHT 2023 Secretaría de Vinculación Tecnológica y Social (UNSL) <br />Diseñado y desarrollado por Iván Agustín Lucero y Octavio Riccardo</p>
            </div>
        </>
    );
}

export default footer;