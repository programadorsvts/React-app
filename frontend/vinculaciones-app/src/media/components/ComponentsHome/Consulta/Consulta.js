

import FormularioCard from './FormularioCard';
/* import MapCard from './MapCard';  */ 

function consulta() {
  return (
    <section className="container mx-auto">
       <h2 className="mt-5 text-center encabezado-2">Envianos tu Consulta</h2>
          <FormularioCard></FormularioCard>
           {/*  <Col className="mt-4  d-flex justify-content-center" >
                    <MapCard></MapCard>  
            </Col> */}
    </section>
    )
 }
export default consulta;
