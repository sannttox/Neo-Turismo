require('dotenv').config();
const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'neo_turismo',
  port: Number(process.env.MYSQL_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


(async () => {
  try {
    const connection = await conexao.getConnection();
    console.log('Conexão com o MySQL (neo_turismo) realizada com sucesso!');
    connection.release();
  } catch (erro) {
    console.error('Erro ao conectar no MySQL:', erro.message);
  }
})();

module.exports = conexao;