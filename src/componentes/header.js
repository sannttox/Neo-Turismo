import { Link } from 'react-router-dom';
import { FaEnvelope, FaHome, FaMapMarkedAlt, FaTags } from 'react-icons/fa';

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <h1>NeoTurismo</h1>
        <p>Conheça as belezas e tradições de Neópolis, Sergipe</p>

        <nav className="navegacao-principal" aria-label="Navegação principal">
          <Link to="/">
            <FaHome aria-hidden="true" /> Início
          </Link>
          <Link to="/atracoes">
            <FaMapMarkedAlt aria-hidden="true" /> Atrações
          </Link>
          <Link to="/categorias">
            <FaTags aria-hidden="true" /> Categorias
          </Link>
          <Link to="/contato">
            <FaEnvelope aria-hidden="true" /> Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
