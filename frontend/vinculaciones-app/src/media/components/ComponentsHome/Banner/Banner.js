import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";


function Banner() {
  return (
    <Container fluid style={{ padding: '0px' }} className="text-center">
      <a href={"assets/revistadigital/revistapdf/cartilla-prensa-workshop.pdf"} target="_blank" rel="noreferrer">
        <Image
          src="assets/images/banner.png"
          alt="banner"
          fluid
          className="banner-image"
        />
      </a>
    </Container>
  );
}

export default Banner;