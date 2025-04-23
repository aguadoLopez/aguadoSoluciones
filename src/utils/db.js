// src/lib/db.js
import mysql from 'mysql2/promise';
import 'dotenv/config';  // Importa dotenv


export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
// // Cargar las variables de entorno desde el archivo .env
// dotenv.config();


// // Función para crear y devolver una conexión a la base de datos
// export async function getDbConnection() {
//   const conn = await mysql.createConnection({
//     host: process.env.DB_HOST,      // Usa las variables de entorno
//     user: process.env.DB_USER,      // Usa las variables de entorno
//     password: process.env.DB_PASSWORD, // Usa las variables de entorno
//     database: process.env.DB_DATABASE, // Usa las variables de entorno
//   });
//   return conn;
// }