import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(express.json()); //express passa a entender o formato json
app.use(cors);
app.use(routes);

// express.static: função que serve arquivos estáticos de uma pasta específica (imagens, pdf, word, etc)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors()); //mudar como são lidados os erros quando são mostrados para o front-end

app.listen(3333);
