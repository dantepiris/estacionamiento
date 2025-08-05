import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Carrusel() {
  return (
    <section className="carrusel">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img src="/vite.svg" alt="Imagen 1" />
        </div>
        <div>
          <img src="/src/assets/react.svg" alt="Imagen 2" />
        </div>
        {/* Agrega más imágenes aquí */}
      </Carousel>
    </section>
  );
}
