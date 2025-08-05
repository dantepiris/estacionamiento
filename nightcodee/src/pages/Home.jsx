import Banner from '../components/ui/Banner/Banner';
import Presentacion from '../components/quiensoy/Presentacion';
import PorQueElegirnos from '../components/porque/PorQueElegirnos';
import Carrusel from '../components/carrusel/Carrusel';
import Footer from '../components/ui/footer/Footer';

export default function Home() {
  return (
    <div>

      <Presentacion />
      <PorQueElegirnos />
      <Carrusel />

    </div>
  );
}
