const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306
});

conexao.connect((erro) => {
  if (erro) {
    throw erro;
  }

  console.log('Conexão com o MySQL realizada.');
});

module.exports = conexao;
