// server.js (en raíz del proyecto)
import { startServer } from './dist/server/entry.mjs';

const PORT = 4321;

startServer({ port: 4321 });

console.log(`http://localhost:4321`);