# NeoTurismo

Aplicação web para apresentar pontos turísticos, categorias e informações úteis sobre Neópolis, Sergipe. As atrações e categorias são consultadas no MySQL e o formulário grava mensagens nesse banco.

## Assuntos da disciplina demonstrados

- React, JSX e componentes reutilizáveis.
- React Router para navegar entre Início, Atrações, Categorias e Contato.
- Props para enviar dados aos cartões de atrações e categorias.
- `map` para montar os cartões a partir de listas.
- `useState`, `onClick` e renderização condicional para mostrar ou ocultar categorias.
- `onChange` para manter os campos do formulário atualizados.
- `useEffect` e Axios para consultar o servidor e o banco de dados.
- Express, CORS e MySQL para consultar atrações e categorias e salvar mensagens.
- React Icons para os ícones da navegação e localização.
- CSS, Flexbox e consulta de mídia para a apresentação responsiva.

## Requisitos

- Node.js e npm.
- MySQL Server e MySQL Workbench.

## Preparar o banco de dados

1. Abra `server/banco-de-dados.sql` no MySQL Workbench.
2. Execute o script uma vez. Ele cria o banco `neo_turismo`, as tabelas `atracoes`, `categorias` e `mensagens`, e os registros iniciais.
3. Se o banco já existe, execute `server/atualizar-categorias.sql` uma única vez para criar e preencher a tabela `categorias`. Não execute novamente depois que ela tiver sido criada.
4. Configure as variáveis de ambiente do servidor com os dados do seu MySQL.

No PowerShell, na pasta `server`, substitua os valores pelos da sua instalação:

```powershell
$env:MYSQL_HOST = "localhost"
$env:MYSQL_USER = "seu_usuario"
$env:MYSQL_PASSWORD = "sua_senha"
$env:MYSQL_DATABASE = "neo_turismo"
$env:MYSQL_PORT = "3306"
npm install
npm start
```

Mantenha esse terminal aberto para deixar o servidor disponível em `http://localhost:3001`.

## Executar a aplicação React

Abra outro terminal na pasta principal do projeto:

```powershell
npm install
npm start
```

A aplicação abre em `http://localhost:3000`. O servidor Express e o MySQL precisam estar em execução para carregar as atrações e enviar mensagens.

## Entendendo os nomes das classes CSS

Os nomes das classes indicam a função e a área da tela em português:

- `conteudo-principal`: área onde o conteúdo da rota atual aparece.
- `apresentacao-cidade` e `imagem-apresentacao`: introdução e foto principal da cidade.
- `grade-atracoes` e `cartao-atracao`: lista e cartão de cada ponto turístico.
- `grade-categorias` e `cartao-categoria`: lista e cartão de cada categoria.
- `campos-formulario` e `botao-enviar`: campos e ação de envio do formulário.
- `mensagem-erro` e `mensagem-sucesso`: avisos apresentados após as ações.

O `className` usado no JSX identifica o elemento. O seletor com o mesmo nome em `src/App.css` define como esse elemento é exibido.
