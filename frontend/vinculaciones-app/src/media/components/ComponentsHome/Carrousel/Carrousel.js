import Carousel from 'react-bootstrap/Carousel';

function carrousel() {
  return (
    <Carousel className='mt-5 mb-5 d-flex justify-content-center'>
      <Carousel.Item interval={1000}>
        <img className="d-block w-50 " src="https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg"alt="First slide"/>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-50"  src="https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg"  alt="Second slide"/>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-50" src="https://i.ytimg.com/vi/sKyGlFSI7gA/maxresdefault.jpg" alt="Third slide"/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default carrousel;