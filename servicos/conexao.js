import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis do .env

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306
});

// Testar conexão
pool.getConnection()
  .then(connection => {
    console.log("✅ Conexão bem-sucedida ao banco:", process.env.MYSQL_DATABASE);
    connection.release();
  })
  .catch(error => {
    console.error("❌ Erro ao conectar ao banco:", error);
  });

export default pool;
