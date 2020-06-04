import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(express.json()); //express passa a entender o formato json
app.use(cors);
app.use(routes);

// express.static: função que serve arquivos estáticos de uma pasta específica (imagens, pdf, word, etc)
app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '..', 'uploads'))
);

app.listen(3333);
