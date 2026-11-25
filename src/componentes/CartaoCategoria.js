function CartaoCategoria({ titulo, descricao, imagem }) {
  return (
    <article className="cartao-categoria">
      <img className="imagem-categoria" src={imagem} alt={titulo} />
      <div className="conteudo-cartao-categoria">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
}

export default CartaoCategoria;
