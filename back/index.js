import cors from 'cors';
import express from 'express';

import getDraft from './routes/getDraft.js';
import submitForm from './routes/submitForm.js';

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/form', getDraft);
app.post('/form', submitForm);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})