import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'), //onde serão guardados os arquivos que forem enviados pelo usuário
    filename: (request, file, callback) => {
      const hash = crypto.randomBytes(6).toString('hex'); //Gerar 6 bytes de caracteres aleatórios convertidos para hexadecimal

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
