import Consulta from "../components/ComponentsHome/Consulta/Consulta";
/* import Noticias from "../components/ComponentsHome/Noticias/Noticias"; */
import Principal from "../components/ComponentsHome/Principal/Principal";
import Redes from "../components/ComponentsHome/Redes/Redes";
import Vinculaciones from "../components/ComponentsHome/Vinculaciones/Vinculaciones";


function Home() {
  
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <>
      {/* <Banner></Banner> */}
      <Principal></Principal>

      {/* <Noticias></Noticias> */}
      {/* <Stan></Stan> */}
      <Vinculaciones></Vinculaciones>
      <Redes></Redes>
      <Consulta></Consulta>
    </>
  );
}

export default Home;
