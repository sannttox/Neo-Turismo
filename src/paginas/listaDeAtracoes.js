import { useEffect, useState } from 'react';
import axios from 'axios';
import CartaoAtracao from '../componentes/CartaoAtracao.js';

function ListaDeAtracoes() {
  const [atracoes, setAtracoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagemErro, setMensagemErro] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/atracoes')
      .then((resposta) => {
        setAtracoes(resposta.data);
        setCarregando(false);
      })
      .catch((erro) => {
        console.error('Não foi possível carregar as atrações:', erro);
        setMensagemErro('Não foi possível carregar as atrações. Verifique o servidor e a conexão com o MySQL.');
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p className="mensagem-pagina">Carregando atrações...</p>;
  }

  if (mensagemErro) {
    return <p className="mensagem-erro" role="alert">{mensagemErro}</p>;
  }

  return (
    <section className="secao-conteudo">
      <h2>Pontos turísticos</h2>
      <p className="introducao-secao">
        Informações carregadas do banco de dados MySQL.
      </p>

      {atracoes.length === 0 ? (
        <p className="mensagem-pagina">Nenhuma atração foi cadastrada no banco de dados.</p>
      ) : (
        <div className="grade-atracoes">
          {atracoes.map((atracao) => (
            <CartaoAtracao
              key={atracao.id}
              nome={atracao.nome}
              descricao={atracao.descricao}
              localizacao={atracao.localizacao}
              imagem={atracao.imagem}
              categoria={atracao.categoria}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaDeAtracoes;
