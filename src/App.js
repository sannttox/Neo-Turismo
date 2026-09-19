import React from 'react';
import './App.css';



function App() {



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
          {/*  
            />
          ))} */}
          <div className="card">
            {/* <img src alt={`Foto de ${nome}`} className="card-img" /> */}
            <div className="card-body">
              <h2>Igreja de Nossa Senhora do Rosário Século XVII</h2>
              <p>É considerada a segunda igreja mais antiga de Sergipe. Teve uma origem peculiar: funcionou originalmente como um forte militar construído por Maurício de Nassau durante o domínio holandês na região. Após a retomada dos portugueses, o quartel-general foi convertido em templo religioso católico pela Confraria de São Benedito dos Homens Pretos. Curiosamente, ela fica de costas para o Rio São Francisco</p>

              {/*  <span className="card-location">📍 {localizacao}</span> */}
            </div>
            </div>
            <div className="card">
              {/* <img src alt={`Foto de ${nome}`} className="card-img" /> */}
              <div className="card-body">
                <h2>Igreja de Nossa Senhora do Rosário Século XVII</h2>
                <p>É considerada a segunda igreja mais antiga de Sergipe. Teve uma origem peculiar: funcionou originalmente como um forte militar construído por Maurício de Nassau durante o domínio holandês na região. Após a retomada dos portugueses, o quartel-general foi convertido em templo religioso católico pela Confraria de São Benedito dos Homens Pretos. Curiosamente, ela fica de costas para o Rio São Francisco</p>

                {/*  <span className="card-location">📍 {localizacao}</span> */}
              </div>
            </div>
        </section>

      </main>


      <footer className="footer">
        <p>© 2026 - Projeto de Programação Web I | Neópolis - Sergipe</p>
      </footer>
    </div>
  );
}

export default App;