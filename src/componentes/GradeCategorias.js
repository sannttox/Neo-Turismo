import { useEffect, useState } from 'react';
import axios from 'axios';
import CartaoCategoria from './CartaoCategoria.js';

function GradeCategorias() {
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/categorias')
      .then((resposta) => {
        setCategorias(resposta.data);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error('Não foi possível carregar as categorias:', erro);
        setMensagemErro('Não foi possível carregar as categorias. Verifique o servidor e o banco de dados.');
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p className="mensagem-pagina">Carregando categorias...</p>;
  }

  if (mensagemErro) {
    return <p className="mensagem-erro" role="alert">{mensagemErro}</p>;
  }

  if (categorias.length === 0) {
    return <p className="mensagem-pagina">Nenhuma categoria foi cadastrada no banco de dados.</p>;
  }

  return (
    <div className="grade-categorias">
      {categorias.map((categoria) => (
        <CartaoCategoria
          key={categoria.id}
          titulo={categoria.titulo}
          descricao={categoria.descricao}
          imagem={categoria.imagem}
        />
      ))}
    </div>
  );
}

export default GradeCategorias;
