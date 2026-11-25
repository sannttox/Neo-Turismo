import { Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/header.js';
import Rodape from './componentes/rodape.js';
import Inicio from './paginas/inicio.js';
import ListaDeAtracoes from './paginas/listaDeAtracoes.js';
import ListaDeCategorias from './paginas/listaDeCategorias.js';
import Contato from './paginas/contato.js';
import './App.css';

function App() {
  return (
    <div className="aplicacao">
      <Cabecalho />

      <main className="conteudo-principal">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/atracoes" element={<ListaDeAtracoes />} />
          <Route path="/categorias" element={<ListaDeCategorias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<p className="mensagem-pagina">Página não encontrada.</p>} />
        </Routes>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
