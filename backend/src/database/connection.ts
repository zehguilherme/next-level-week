import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'), //__dirname: retorna o diretório do arquivo em que essa variável está sendo executada
  },
  useNullAsDefault: true,
});

export default connection;
