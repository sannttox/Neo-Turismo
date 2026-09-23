import Header from './header.js';
import Formulario from './forms.js';
import './App.css';

import './App.css';


function App() {
  return (
    <div className="container">
      {/* Cabeçalho do Site */}
      {/* <header className="header">
        <h1>Pontos Turísticos de Neópolis - SE</h1>
        <p>Conheça as belezas e tradições da Capital do Frevo Sergipano</p>
      </header> */}

      <Header />



      {/* Conteúdo Principal */}
      <main className="main-content">

        <section className="cards-grid">

          <div className="card">
            <img src="/imagem/igreja-rosario.jpg" alt="igreja-rosario" className="card-img" />
            <div className="card-body">
              <h2>Igreja de Nossa Senhora do Rosário Século XVII</h2>
              <p>É considerada a segunda igreja mais antiga de Sergipe. Teve uma origem peculiar: funcionou originalmente como um forte militar construído por Maurício de Nassau durante o domínio holandês na região. Após a retomada dos portugueses, o quartel-general foi convertido em templo religioso católico pela Confraria de São Benedito dos Homens Pretos. Curiosamente, ela fica de costas para o Rio São Francisco</p>
              <p className="card-location">📍localizacao:Rua Dom José Tomás, Centro, Neópolis - SE </p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/monsenhor.jpg" alt="Praca-monsenhor" className="card-img" />
            <div className="card-body">
              <h2>Praça Monsenhor José Moreno de Santana (Dualidade das Igrejas)</h2>
              <p>Representa uma característica urbana raríssima no Brasil: é o único espaço público em Sergipe que abriga duas igrejas católicas coloniais construídas de frente uma para a outra, a Igreja de Nossa Senhora do Rosário e a Igreja Matriz de Santo Antônio. A Matriz de Santo Antônio começou a ser erguida para substituir a do Rosário, mas um forte inverno em 1813 desabou seu teto. O cenário da praça preserva a pavimentação e o casario do século XVII</p>
              <p className="card-location">📍localizacao: Centro Comercial de Neópolis - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/aracare.jpg" alt="Morro-aracare" className="card-img" />
            <div className="card-body">
              <h2>Morro do Esquiriguindim (Alto do Aracaré)</h2>
              <p>É o ponto geográfico mais alto da zona urbana de Neópolis. Tornou-se um local de forte peregrinação e sincretismo religioso após a construção de uma escadaria com 100 degraus que leva os fiéis até o topo. Lá em cima, foi erguida uma estátua monumental em homenagem ao Padre Cícero, onde são realizadas missas campestres e orações</p>
              <p className="card-location">📍localizacao: Morro do Aracaré, Neópolis - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/balsas.jpeg" alt="Porto-balsas" className="card-img" />
            <div className="card-body">
              <h2>Porto das Balsas de Neópolis</h2>
              <p>O porto é o coração pulsante da economia ribeirinha tradicional local. A Orlinha foi reestruturada com calçadão, quiosques e restaurantes de culinária típica do "Velho Chico" (foco em peixes como a tilápia e o tucunaré). O local serve como ponto de embarque para as balsas que fazem a travessia diária de passageiros e veículos pelo Rio São Francisco até a cidade histórica de Penedo, em Alagoas.</p>
              <p className="card-location">📍localizacao: Margem do Rio São Francisco, Centro, Neópolis - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/aldeia.jpg" alt="Aldeia" className="card-img" />
            <div className="card-body">
              <h2>Aldeia Indígena Fulkaxó</h2>
              <p>Ponto pouquíssimo conhecido e de altíssimo valor cultural. Trata-se da primeira reserva indígena oficial do estado de Sergipe, conquistada em definitivo após anos de demarcação e disputas fundiárias (antiga Fazenda Soloncy Moura, na divisa ecológica entre Neópolis e Pacatuba). A etnia Fulkaxó (descendentes dos Xocós) reside no local e preserva rituais ancestrais, cantos, danças tradicionais e produção artesanal única.</p>
              <p className="card-location">📍localizacao:Limite geográfico rural entre Neópolis e Pacatuba - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/passagem.jpg" alt="passagem" className="card-img" />
            <div className="card-body">
              <h2>Antiga Vila Operária da Passagem</h2>
              <p>Um atrativo de patrimônio industrial esquecido pela maioria dos guias tradicionais. Trata-se de uma antiga vila residencial construída no início do século XX para abrigar operários e tecelões de uma importante fábrica têxtil histórica instalada na região do Baixo São Francisco. Mantém as linhas simétricas, as fachadas simples padronizadas e o charme da arquitetura operária de época.</p>
              <p className="card-location">📍localizacao: Distrito industrial/rural de Passagem, Neópolis - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/sao-sebastiao.jpeg" alt="Sao-sebastiao" className="card-img" />
            <div className="card-body">
              <h2>Igreja de São Sebastião (Povoado Porteiras)</h2>
              <p>Este é um verdadeiro tesouro escondido do patrimônio nacional. Construída originalmente no século XVIII, a singela e histórica Igrejinha de São Sebastião é tombada como sítio arqueológico pelo IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional). Ela guarda vestígios do período colonial e funciona como um símbolo intocado da fé e da resistência das comunidades ribeirinhas do "Velho Chico".</p>
             <p className="card-location">📍localizacao: Povoado Porteiras, Zona Rural, Neópolis - SE</p>
            </div>
          </div>

          <div className="card">
            <img src="/imagem/oportinho.jpg" alt="o-portinho" className="card-img" />
            <div className="card-body">
              <h2>O Portinho</h2>
              <p>Diferente dos monumentos coloniais, O Portinho é um ponto turístico moderno com foco em turismo de lazer e gastronomia de praia fluvial. Localiza-se exatamente na margem sergipana do Rio São Francisco (na divisa entre Neópolis e Penedo). Funciona como um espaço rústico/sofisticado à beira-rio com bangalôs, mesas sob ombrelones, servindo petiscos regionais, caldinhos e bebidas geladas com uma atmosfera voltada para o descanso da família.</p>
             <p className="card-location">📍localizacao: Margem do Rio São Francisco, Neópolis - SE</p>
            </div>
          </div>

        </section>


        <Formulario />

        {/* <section className='form'>
          <form action="">
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

            <button type="submit">Enviar</button>
          </form>
        </section> */}

      </main>


      <footer className="footer">
        <p>© 2026 - NeoTurismo | Neópolis - Sergipe</p>
      </footer>


    </div>
  );
}

export default App;