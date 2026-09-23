import Header from './componentes/header.js';
import Formulario from './componentes/forms.js';
import './App.css';

function App() {
  return (
    <div className="container">

      <Header />

      <main className="main-content">

        <section className="about-section">
          <div className="about-imagem">
            <img src="/imagem/neopolis-central.jpeg" alt="neopolis-central" className="card-img" />
          </div>
          <div className="about-text">
            <p>Neópolis é um destino turístico encantador localizado às margens do Rio São Francisco, no estado de Sergipe [SE]. A cidade oferece aos visitantes belas paisagens ribeirinhas, ótimas opções de passeios de barco e um fascinante patrimônio histórico preservado em suas ruas e casarões antigos.</p>
            <p>Além da natureza exuberante do Velho Chico, o turismo na região se destaca pela deliciosa culinária baseada em peixes frescos e pelas festividades tradicionais muito animadas. É o lugar ideal para quem deseja relaxar, saborear a verdadeira comida nordestina e vivenciar a cultura local de perto.</p>
          </div>
        </section>

       
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
            <img src="/imagem/balsas.jpeg" alt="Porto-balsas" className="card-img" />
            <div className="card-body">
              <h2>Porto das Balsas de Neópolis</h2>
              <p>O porto é o coração pulsante da economia ribeirinha tradicional local. A Orlinha foi reestruturada com calçadão, quiosques e restaurantes de culinária típica do "Velho Chico" (foco em peixes como a tilápia e o tucunaré). O local serve como ponto de embarque para as balsas que fazem a travessia diária de passageiros e veículos pelo Rio São Francisco até a cidade histórica de Penedo, em Alagoas.</p>
              <p className="card-location">📍localizacao: Margem do Rio São Francisco, Centro, Neópolis - SE</p>
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
            <img src="/imagem/oportinho.jpg" alt="o-portinho" className="card-img" />
            <div className="card-body">
              <h2>O Portinho</h2>
              <p>Diferente dos monumentos coloniais, O Portinho é um ponto turístico moderno com foco em turismo de lazer e gastronomia de praia fluvial. Localiza-se exatamente na margem sergipana do Rio São Francisco (na divisa entre Neópolis e Penedo). Funciona como um espaço rústico/sofisticado à beira-rio com bangalôs, mesas sob ombrelones, servindo petiscos regionais, caldinhos e bebidas geladas com uma atmosfera voltada para o descanso da família.</p>
              <p className="card-location">📍localizacao: Margem do Rio São Francisco, Neópolis - SE</p>
            </div>
          </div>

        </section>
        
        <section className="categories-grid">
          <div className="category-card">
            <img src="/imagem/como-chegar.jpg" alt="Como Chegar" className="category-img" />
            <div className="category-body">
              <h2 className="category-title">Como Chegar</h2>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </div>
          </div>

          <div className="category-card">
            <img src="/imagem/onde-ir.jpg" alt="Onde Ir" className="category-img" />
            <div className="category-body">
              <h2 className="category-title">Onde Ir</h2>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </div>
          </div>

          <div className="category-card">
            <img src="/imagem/oque-fazer.jpg" alt="O que Fazer" className="category-img" />
            <div className="category-body">
              <h2 className="category-title">O que Fazer</h2>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </div>
          </div>

          <div className="category-card">
            <img src="/imagem/saiba-mais.jpg" alt="Ver Mais" className="category-img" />
            <div className="category-body">
              <h2 className="category-title">Ver Mais</h2>
              <button className="btn-saiba-mais">Saiba Mais</button>
            </div>
          </div>
        </section>

        <Formulario />

      </main>

      <footer className="footer">
        <p>NeoTurismo - 2026 | Neópolis - Sergipe</p>
      </footer>

    </div>
  );
}

export default App;