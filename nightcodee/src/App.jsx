
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Banner from './components/ui/Banner/Banner';
import Footer from './components/ui/footer/Footer';

function App() {
  return (
    <>
      <Banner />
      <BrowserRouter basename="/nightcodee">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí puedes agregar más rutas en el futuro */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App
