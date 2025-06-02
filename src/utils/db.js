// src/lib/db.js
import mysql from 'mysql2/promise';
import 'dotenv/config';  // Importa dotenv

// variable de vite que indica si estamos en desarrollo
const isDev = import.meta.env.DEV;

const dbConfig = {
  host: isDev ? 'localhost' : import.meta.env.DB_HOST,
  user: isDev ? import.meta.env.DB_USER_DEV : import.meta.env.DB_USER,
  password: isDev ? import.meta.env.DB_PASSWORD_DEV : import.meta.env.DB_PASSWORD,
  database: import.meta.env.DB_DATABASE,
  port: Number(import.meta.env.DB_PORT),
  ssl: isDev ? false : { rejectUnauthorized: true },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};


export const db = mysql.createPool(dbConfig);