import path from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(
      __dirname, // __dirname: retorna o diretório do arquivo em que essa variável está sendo executada
      'src',
      'database',
      'database.sqlite',
    ),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
  useNullAsDefault: true,
};
