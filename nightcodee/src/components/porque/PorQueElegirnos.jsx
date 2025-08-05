import './PorQueElegirnos.css';

const tarjetas = [
  { titulo: 'Calidad', descripcion: 'Impresiones 3D de alta calidad y precisión.' },
  { titulo: 'Personalización', descripcion: 'Adaptamos tus ideas a modelos únicos.' },
  { titulo: 'Rapidez', descripcion: 'Entrega rápida y atención personalizada.' }
];

export default function PorQueElegirnos() {
  return (
    <section className="por-que-elegirnos">
      <h3>¿Por qué elegirnos?</h3>
      <div className="tarjetas">
        {tarjetas.map((t, i) => (
          <div className="tarjeta" key={i}>
            <h4>{t.titulo}</h4>
            <p>{t.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
