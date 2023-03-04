import Consulta from "../components/ComponentsHome/Consulta/Consulta";
import Convocatorias from "../components/ComponentsHome/Convocatorias/Convocatorias";
import Gestion from "../components/ComponentsHome/Gestion/Gestion";
import Noticias from "../components/ComponentsHome/Noticias/Noticias";
import Principal from "../components/ComponentsHome/Principal/Principal";
import Redes from "../components/ComponentsHome/Redes/Redes";
import Vinculaciones from "../components/ComponentsHome/Vinculaciones/Vinculaciones";
import Stan from "../components/ComponentsHome/Stan/Stan";
import Loader from '../components/Loader/Loader'

function Home() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      <Loader></Loader>
      <Principal></Principal>
      <Noticias></Noticias>
      <Gestion></Gestion>
      <Stan></Stan>
      <Convocatorias></Convocatorias>
      <Vinculaciones></Vinculaciones>
      <Redes></Redes>
      <Consulta></Consulta>
    </>
  );
}

export default Home;
