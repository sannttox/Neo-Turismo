import { useState } from 'react';
import axios from 'axios';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensagemStatus, setMensagemStatus] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  function enviarMensagem(evento) {
    evento.preventDefault();
    setMensagemStatus('');
    setMensagemErro('');

    axios.post('http://localhost:3001/mensagens', {
      nome,
      email,
      comentario
    })
      .then(() => {
        setNome('');
        setEmail('');
        setComentario('');
        setMensagemStatus('Mensagem enviada com sucesso.');
      })
      .catch((erro) => {
        console.error('Não foi possível enviar a mensagem:', erro);
        setMensagemErro('Não foi possível enviar. Verifique o servidor e a conexão com o MySQL.');
      });
  }

  return (
    <section className="secao-conteudo">
      <div className="formulario-contato">
        <h2>Fale conosco</h2>
        <p className="introducao-secao">
          Envie um comentário ou uma dúvida sobre o turismo em Neópolis.
        </p>

        <form className="campos-formulario" onSubmit={enviarMensagem}>
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            required
          />

          <label htmlFor="comentario">Comentário</label>
          <textarea
            id="comentario"
            name="comentario"
            rows="4"
            value={comentario}
            onChange={(evento) => setComentario(evento.target.value)}
            placeholder="Deixe seu comentário aqui"
            required
          />

          <button className="botao-enviar" type="submit">Enviar mensagem</button>
        </form>

        {mensagemStatus && <p className="mensagem-sucesso" role="status">{mensagemStatus}</p>}
        {mensagemErro && <p className="mensagem-erro" role="alert">{mensagemErro}</p>}
      </div>
    </section>
  );
}

export default Contato;
