import React from 'react';

function Formulario () {
    return (

        <section className="form">
            <form onSubmit={(e) => e.preventDefault()}>
            <h2>Formulário</h2>

            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome"></input>

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email"></input>

            <label htmlfor="comentario">Comentário:</label>
            <textarea
            id="comentario"
            name="comentario"
            rows="4"
            placeholder="Deixe seu comentário aqui"
            ></textarea>

            <button type="submit" className="botao-forms">Enviar</button>
          </form>
        </section>
    );
}

export default Formulario;