import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis de ambiente

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

export default pool;


// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'clinicapediatradb'
// });

// export default pool;