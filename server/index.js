require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'neo_turismo',
  port: Number(process.env.MYSQL_PORT) || 3306,
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
  } else {
    console.log('Conectado com sucesso ao banco MySQL neo_turismo!');
    connection.release();
  }
});

app.get('/', (req, res) => {
  res.json({ status: 'API NeoTurismo online', rotas: ['/atracoes', '/categorias', '/mensagens'] });
});

app.get('/atracoes', (req, res) => {
  db.query('SELECT * FROM atracoes ORDER BY id ASC', (err, results) => {
    if (err) {
      console.error('Erro ao consultar atrações:', err.message);
      return res.status(500).json({ erro: 'Erro ao consultar atrações no banco de dados.' });
    }
    return res.json(results);
  });
});

app.get('/categorias', (req, res) => {
  db.query('SELECT * FROM categorias ORDER BY id ASC', (err, results) => {
    if (err) {
      console.error('Erro ao consultar categorias:', err.message);
      return res.status(500).json({ erro: 'Erro ao consultar categorias no banco de dados.' });
    }
    return res.json(results);
  });
});

app.post('/mensagens', (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
  }

  const sql = 'INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)';
  db.query(sql, [nome.trim(), email.trim(), mensagem.trim()], (err, result) => {
    if (err) {
      console.error('Erro ao salvar mensagem:', err.message);
      return res.status(500).json({ erro: 'Erro ao gravar mensagem no banco de dados.' });
    }
    return res.status(201).json({
      id: result.insertId,
      mensagem: 'Mensagem enviada e salva no MySQL com sucesso!'
    });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor NeoTurismo rodando em http://localhost:${PORT}`);
});