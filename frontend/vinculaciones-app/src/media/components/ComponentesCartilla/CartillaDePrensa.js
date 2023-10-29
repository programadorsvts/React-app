// components/CartillaDePrensa.js
import React from "react";
import { Container } from "react-bootstrap";
import Galeria from "../ComponentsHome/Galeria/Galeria";
import "../ComponentsHome/Principal/principal.css";

function CartillaDePrensa() {
  const imagenes = [
    { src: "assets/workshop/stand1.webp", alt: "imagen-4" },
    { src: "assets/workshop/stand2.webp", alt: "imagen-2" },
    { src: "assets/workshop/stand3.webp", alt: "imagen-3" },
    { src: "assets/workshop/stand4.webp", alt: "imagen-1" },
    { src: "assets/workshop/stand5.webp", alt: "imagen-5" },
    { src: "assets/workshop/stand6.webp", alt: "imagen-6" },
    { src: "assets/workshop/stand7.webp", alt: "imagen-7", clickable: true },
  ];
  return (
    <Container fluid className="">
      <section className="container">
        <Container style={{ marginTop: "50px", marginLeft: "10px" }}>
          <h1 className="hero text-deg">Cartilla De Prensa</h1>
          <br />
          <br />
          <h2 className="text-deg">
            WORKSHOP: “Nuevos desafíos para la Innovación”.
          </h2>
        </Container>
        <Container style={{ paddingLeft: "40px" }} className="container">
          <p style={{ textAlign: "left" }} className="encabezado-4 mt-5 w-100">
            La Secretaría de Vinculación Tecnológica y Social (SVTS), organizará
            un evento workshop denominado “Nuevos Desafíos para la Innovación”,
            con la participación de disertantes y stands con equipos de
            investigadores/as de la UNSL. Dicho evento se desarrollará el día 8
            de noviembre, en el horario de 9:00 a 13:00 horas en el Microcine de
            la Universidad Nacional de San Luis (UNSL), con el siguiente
            cronograma:
          </p>
        </Container>
        <Container
          style={{ fontSize: "14px", paddingLeft: "60px" }}
          className="container"
        >
          <ul className=" pl-4 mt-2 text-2">
            <li>Presentación del evento por autoridades de la SVTS.</li>
            <br />
            <li>
              Disertación,{" "}
              <span className="text-3">
                “Capacidades e indicadores de vinculación tecnológica y social
                en la Universidad Nacional de San Luis”
              </span>
              , por parte del Dr. Martín Fernández Baldo, Secretario de la SVTS.
            </li>
            <br />
            <li>
              Disertación,{" "}
              <span className="text-3">
                “Conectando ciencia e innovación: El papel fundamental de la
                investigación científica y la gestión universitaria en la
                transferencia de conocimiento tecnológico”
              </span>
              , por parte del Dr. Mauricio Erben, Decano de la Facultad de
              Ciencias Exactas de la Universidad Nacional de La Plata (UNLP).
            </li>
            <br />
            <li>
              Disertación,{" "}
              <span className="text-3">
                “Desarrollando puentes entre la ciencia y el medio
                socio-productivo: estrategias y experiencias de la facultad de
                ciencias exactas de la Universidad Nacional de La Plata (UNLP)”
              </span>
              , por parte del Dr. Hugo Valdéz, Secretario de Vinculación de la
              Facultad de Cs. Exactas de la Universidad Nacional de La Plata
              (UNLP).
            </li>
            <br />
            <li>
              Disertación,{" "}
              <span className="text-3">
                “La propiedad intelectual en la Universidad. La oficina CARTILLA
                DE PRENSA. de propiedad intelectual”
              </span>
              , por parte de la Abogada Ivana Romina MUZEVICH, Coordinadora
              General de la Oficina de Propiedad Intelectual (OPI) de la
              Facultad de Ciencias Económicas, Jurídicas y Sociales (FCEJS).
            </li>
            <br />
            <li>
              Disertación de integrantes del equipo UNSLTV, sobre productos de
              animación producidos para diferentes convocatorias.
            </li>
          </ul>
        </Container>
        <h3 style={{ paddingLeft: "20px" }} className="encabezado-2 mt-4">
          PANEL DE VINCULACIÓN Y ACTIVIDADES DE TRANSFERENCIAS:
        </h3>
        <Container style={{ fontSize: "14px", paddingLeft: "40px" }}>
          <p className=" text-2 mt-2">
            Se contará con la presencia de distintos investigadores de nuestra
            universidad y empresarios con quienes se han realizado diferentes
            actividades de transferencia con el sector socio productivo y de
            gobierno.
          </p>
          <h4 className="mt-3">Integrantes del panel:</h4>
          <ul className="list-disc pl-4 mt-2 text-4">
            <li>
              Dra. Sonia Barberis, Directora del Laboratorio de Control de
              Calidad y Desarrollo de Bromatología de la UNSL con{" "}
              <span className="text-4">varios productos desarrollados</span>.
            </li>
            <br />
            <li>
              Dr. Matías Funes, Director del Laboratorio de Farmacognosia del
              Instituto Multidisciplinario de Investigaciones Biológicas
              (IMIBIO-SL), con su producto{" "}
              <span className="text-4">Fotoflit</span>.
            </li>
            <br />
            <li>
              Dra. Viviana Calvente, Directora del Laboratorio de Microbiología
              Industrial. Contando sobre la experiencia de vinculación con la
              empresa <span className="text-4">Chandón</span>.
            </li>
            <br />
            <li>
              Sr. Gastón Castro de la Empresa Castro Hnos. SRL y su producto
              transferido <span className="text-4">NUTRIFORM</span>.
            </li>
          </ul>
        </Container>
        <h3 style={{ paddingLeft: "20px" }} className="encabezado-2 mt-4">
          STAND INVITADOS
        </h3>
        <Galeria imagenes={imagenes} />
        <Container className="text-center">
          <h3 className=" encabezado-2 mt-4">Inscripción:</h3>
          <p className="encabezado-4 mt-2">
            Para confirmar tu asistencia, completar el siguiente formulario:
            <br/>
            <a
              href="https://acortar.link/ABOxDn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-deg encabezado-5"
            >
              https://acortar.link/ABOxDn
            </a>
          </p>
          <p className="encabezado-4 mt-2">
            Se entregarán certificados de asistencia y resolución rectoral.
          </p>
          <p className="encabezado-4 mt-2">
            Para consultas y entrevistas escribir a{" "}
            <a href="mailto:svts.unsl@gmail.co" className="text-deg encabezado-5">
              svts.unsl@gmail.co
            </a>
          </p>
        </Container>
      </section>
    </Container>
  );
}

export default CartillaDePrensa;
