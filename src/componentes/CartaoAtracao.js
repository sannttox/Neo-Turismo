import { FaMapMarkerAlt } from 'react-icons/fa';

function CartaoAtracao({ nome, descricao, localizacao, imagem, categoria }) {
  return (
    <article className="cartao-atracao">
      <img className="imagem-atracao" src={imagem} alt={nome} />
      <div className="conteudo-cartao-atracao">
        <p className="categoria-atracao">{categoria}</p>
        <h3>{nome}</h3>
        <p className="descricao-atracao">{descricao}</p>
        <p className="localizacao-atracao">
          <FaMapMarkerAlt aria-hidden="true" /> {localizacao}
        </p>
      </div>
    </article>
  );
}

export default CartaoAtracao;
