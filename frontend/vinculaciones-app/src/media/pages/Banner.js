import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

function Banner() {
  const [imageSrc, setImageSrc] = useState("assets/images/banner.webp");

  useEffect(() => {
    // Establece la imagen según el ancho de la ventana al cargar el componente
    if (window.innerWidth <= 768) { // 768px es comúnmente usado para dispositivos móviles, pero puedes ajustarlo
      setImageSrc("assets/images/banner2.webp");
    } else {
      setImageSrc("assets/images/banner.webp");
    }

    // Establece la imagen si se redimensiona la ventana
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("assets/images/banner2.webp");
      } else {
        setImageSrc("assets/images/banner.webp");
      }
    };

    // Escucha el evento de redimensionamiento de la ventana
    window.addEventListener("resize", handleResize);

    // Limpia el evento de redimensionamiento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container fluid style={{ padding: '0px' }} className="text-center">
      <a href={"assets/revistadigital/revistapdf/cartilla-prensa-workshop.pdf"} target="_blank" rel="noreferrer">
        <Image
          src={imageSrc}
          alt="imagen-4"
          fluid
          className="banner-image"
        />
      </a>
    </Container>
  );
}

export default Banner;
