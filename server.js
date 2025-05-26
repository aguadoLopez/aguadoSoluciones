// server.js
import { handler } from './dist/server/entry.mjs';
import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

createServer(handler).listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
