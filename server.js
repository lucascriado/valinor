import express from 'express';
import fs from 'fs';
import https from 'https';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const options = {
  key: fs.readFileSync('/etc/letsencrypt/archive/lucascriado.com/privkey2.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/archive/lucascriado.com/fullchain2.pem')
};

const app = express();

app.use(express.static(path.join(__dirname, 'dist/valinor')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/valinor', 'index.html'));
});

const appPort = 9090;

https.createServer(options, app).listen(appPort, () => {
  console.log(`Aplicação rodando em https://localhost:${appPort}`);
});
