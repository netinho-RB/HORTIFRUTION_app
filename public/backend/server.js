const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

  // Rota para obter o histórico de vendas do banco de dados
app.get('/api/historico-vendas', (req, res) => {
  // Execute uma consulta no banco de dados para obter os dados do histórico de vendas
  const query = 'SELECT * FROM historico_vendas'; // Supondo que sua tabela no banco de dados se chama 'historico_vendas'
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter o histórico de vendas:', error);
      res.status(500).json({ error: 'Erro ao obter o histórico de vendas' });
    } else {
      res.status(200).json(results);
    }
  });
}); 
 
// Configurações do banco de dados
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3307, // Usando a porta 3307
});

// Conexão com o banco de dados
connection.connect((error) => {
  if (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados!');
  }
});

// Middleware para permitir solicitações de origens diferentes (CORS)
app.use(cors());

// Resto do código do servidor...


// Rota para obter o histórico de vendas do banco de dados
app.get('/api/historico-vendas', (req, res) => {
  const query = 'SELECT * FROM historico_vendas';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao obter o histórico de vendas:', error);
      res.status(500).json({ error: 'Erro ao obter o histórico de vendas' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
