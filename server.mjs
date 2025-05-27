// server.js (en raíz del proyecto)
import { startServer } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 4321;
console.log('Llamando a startServer...');
startServer({ port: PORT });
console.log('startServer() fue llamado, ¿sigue vivo el proceso?');
console.log(`http://localhost:${PORT}`);
setInterval(() => {}, 1000 * 60 * 60);