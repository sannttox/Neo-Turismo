import { useState } from 'react';
import { Link } from 'react-router-dom';
import GradeCategorias from '../componentes/GradeCategorias.js';

function Inicio() {
  const [categoriasVisiveis, setCategoriasVisiveis] = useState(true);

  function alternarCategorias() {
    setCategoriasVisiveis(!categoriasVisiveis);
  }

  return (
    <>
      <section className="apresentacao-cidade">
        <img
          className="imagem-apresentacao"
          src="/imagem/neopolis-central.jpeg"
          alt="Vista de Neópolis, às margens do Rio São Francisco"
        />
        <div className="texto-apresentacao">
          <h2>Descubra Neópolis</h2>
          <p>
            Neópolis é um destino turístico às margens do Rio São Francisco, em Sergipe.
            A cidade reúne paisagens ribeirinhas, passeios de barco, patrimônio histórico,
            culinária regional e festas tradicionais.
          </p>
          <Link className="botao-link" to="/atracoes">Conheça as atrações</Link>
        </div>
      </section>

      <section className="secao-categorias">
        <div className="titulo-secao-com-acao">
          <h2>Explore Neópolis</h2>
          <button className="botao-secundario" type="button" onClick={alternarCategorias}>
            {categoriasVisiveis ? 'Ocultar categorias' : 'Mostrar categorias'}
          </button>
        </div>

        {categoriasVisiveis && (
          <GradeCategorias />
        )}
      </section>
    </>
  );
}

export default Inicio;
