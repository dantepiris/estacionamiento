import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nightcode. Todos los derechos reservados.</p>
    </footer>
  );
}
