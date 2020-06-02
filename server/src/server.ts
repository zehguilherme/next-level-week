import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json(['Teste']);
});

app.listen(3333);
