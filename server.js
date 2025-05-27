// server.js (en raíz del proyecto)
import { startServer } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 4321;

startServer({ port: PORT });

console.log(`http://localhost:${PORT}`);