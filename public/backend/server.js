const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

// Configurações do banco de dados
const connection = mysql.createConnection({
  host: 'endereco_do_seu_container_mysql', // Preencha com o endereço do seu container Docker
  user: 'seu_usuario_mysql', // Preencha com o usuário do seu banco de dados MySQL
  password: 'sua_senha_mysql', // Preencha com a senha do seu banco de dados MySQL
  database: 'hortifruti_db', // Preencha com o nome do banco de dados que você criou
  port: 3306, // Preencha com a porta do seu container Docker, geralmente é a porta 3306
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
