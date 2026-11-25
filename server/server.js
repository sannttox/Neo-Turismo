require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conexao = require('./config/database'); // Importa o pool do MySQL

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
  try {
    await conexao.query('SELECT 1');
    res.json({ status: 'ok', database: 'neo_turismo conectado' });
  } catch (erro) {
    res.status(500).json({ status: 'erro', mensagem: erro.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor NeoTurismo disponível em http://localhost:${PORT}`);
});