import React from 'react';
import './App.css';

// Componente individual para cada Ponto Turístico (Componentização)
function TouristCard({ nome, imagem, descricao,valoresDeEntrada, mediaDeVisitasAno, grauDeProcura, localizacao }) {
 
  return (
    <article className="card">
      <img src={imagem} alt={`Foto de ${nome}`} className="card-img" />
      <div className="card-body">
        <h2>{nome}</h2>
        <p>{descricao}</p>
        {valoresDeEntrada && (
          <p>strong>Valores de Entrada:</strong> {valoresDeEntrada}</p>
        )}
        {mediaDeVisitasAno && (
          <p><strong>Média de Visitantes/Ano:</strong> {mediaDeVisitasAno}</p>
        )}
        {grauDeProcura && (
          <p>strong>Grau de Procura:</strong> {grauDeProcura}</p>
        )}
        <span className="card-location">📍 {localizacao}</span>
      </div>
    </article>
  );
}

function App() {
  // Lista de dados dos 6 pontos turísticos de Neópolis - SE
  const pontosTuristicos = [
    {
      id: 1,
      nome: "Igreja de Nossa Senhora do Rosário Século XVII",
      imagem: "/imagem/Monsenhor.jpg",
      descricao: "É considerada a segunda igreja mais antiga de Sergipe. Teve uma origem peculiar: funcionou originalmente como um forte militar construído por Maurício de Nassau durante o domínio holandês na região. Após a retomada dos portugueses, o quartel-general foi convertido em templo religioso católico pela Confraria de São Benedito dos Homens Pretos. Curiosamente, ela fica de costas para o Rio São Francisco",
      valoresDeEntrada: "Gratuito visitação externa ou durante celebrações",
      mediaDeVisitasAno: "Fluxo estimado de 2.000 a 4.000 visitantes/ano, concentrados em eventos religiosos e turismo histórico regional",
      grauDeProcura: "Médio-Alto é o principal cartão-postal histórico urbano da cidade",
      localizacao: "Rua Dom José Tomás, Centro, Neópolis - SE",
    },
  ];

  return (
    <div className="container">
      {/* Cabeçalho do Site */}
      <header className="header">
        <h1>Pontos Turísticos de Neópolis - SE</h1>
        <p>Conheça as belezas e tradições da Capital do Frevo Sergipano</p>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <section className="cards-grid">
          {pontosTuristicos.map((ponto) => (

            <TouristCard
              key={ponto.id}
              nome={ponto.nome}
              imagem={ponto.imagem}
              descricao={ponto.descricao}
              valoresDeEntrada={ponto.valoresDeEntrada}
              mediaDeVisitasAno={ponto.mediaDeVisitasAno}
              grauDeProcura={ponto.grauDeProcura}
              localizacao={ponto.localizacao}
            />
          ))}
        </section>
      </main>

      {/* Rodapé do Site */}
      <footer className="footer">
        <p>© 2026 - Projeto de Programação Web I | Neópolis - Sergipe</p>
      </footer>
    </div>
  );
}

export default App;