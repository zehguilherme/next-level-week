import { Request, Response } from 'express';
import knex from '../database/connection'; //conexão com o banco

class ItemsController {
  // Listar todos os itens
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    //As informações do banco não estão inicialmente da melhor maneira para que possam ser retornadas para o front-end, cliente
    //O ato de transformar esses dados/informações para um novo formato que será mais acessível para quem está requisitando essas informações é chamado de serialização

    //map: percorre todos os itens
    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.2.108:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
