
// import {create} from 'apisauce';

import Container from 'react-bootstrap/Container';
import ProyectoCard from '../ProyectoCard/ProyectoCard';
import "./proyecto.css"

function ProyectosPublicados(){

               /*  const api = create({ baseURL: 'https://api.github.com' })

                const [ proyectos, setProyectos]=useState=([]);

                useEffect( ()=> {
                        ObtenerProyectos();
                },[ ]);

                const ObtenerProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        // response.problem
                                    }
                                     console.log(response);    
                                })
                }

                const BuscarProyectos = async ()=>{

                                api.get('/proyectos').then (response =>{
                                    if(!response.ok){
                                        // response.problem
                                    }
                                     console.log(response);    
                                })
                } */



    return(
        <>
        <Container>
        <h1 className='encabezado-2 mb-5'>Proyectos Publicados</h1>
                
                <Container className="proyecto">
                        <ProyectoCard titulo="Hortalizas deshidratadas utilizando energia no convencional" area="alimentos"/>
                        <ProyectoCard titulo="Jabón en comprimidos" area="salud"/>
                        <ProyectoCard titulo="Kit biodegradable para control de malezas" area="alimentos"/>
                        <ProyectoCard titulo="Perlas biofertilizantes - Biopek" area="fertilizantes"/>
                        <ProyectoCard titulo="Tratamiento de temblor esencial en extremidades" area="salud"/>
                        <ProyectoCard titulo="Conversor de contamienantes organicos" area="salud"/>
                        <ProyectoCard titulo="Estudio de procesos avanzados de oxigenación aplicados al tratamiento de aguas residuales de la industria farmaceutica" area="tratamiento de aguas asdsadasdasd"/>
                        <ProyectoCard titulo="Estudio de procesos avanzados de oxigenación aplicados al tratamiento de aguas residuales de la industria farmaceutica" area="salud"/>
                        <ProyectoCard titulo="Desarrollo y ambiente" area="ambiente"/>
                        <ProyectoCard titulo="Estudio de procesos avanzados de oxigenación aplicados al tratamiento de aguas residuales de la industria farmaceutica" area="salud"/>
                        <ProyectoCard titulo="Desarrollo y ambiente" area="ambiente"/>
                </Container>
        </Container>   
        </>
    );
}


 export default ProyectosPublicados