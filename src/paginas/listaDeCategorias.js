import { Link } from 'react-router-dom';
import GradeCategorias from '../componentes/GradeCategorias.js';

function ListaDeCategorias() {
  return (
    <section className="secao-conteudo">
      <h2>Categorias de viagem</h2>
      <p className="introducao-secao">
        Consulte os temas do guia e acesse a lista completa de atrações.
      </p>
      <GradeCategorias />
      <Link className="botao-link" to="/atracoes">Ver todas as atrações</Link>
    </section>
  );
}

export default ListaDeCategorias;
