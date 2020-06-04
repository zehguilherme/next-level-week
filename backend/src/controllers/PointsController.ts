import { Request, Response } from 'express';
import knex from '../database/connection'; //conexão com o banco

class PointsController {
  //Listar pontos de coleta (filtro por estado/cidade/itens)
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    // Itens analisados da requisição
    const parsedItems = String(items)
      .split(',')
      .map((item) => Number(item.trim()));

    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*'); //Buscar apenas dados da tabela points

    return response.json(points);
  }

  // Listar um ponto de coleta específico
  async show(request: Request, response: Response) {
    const id = request.params.id;

    // Buscar o id na tabela que seja igual ao id vindo da requisição
    const point = await knex('points').where('id', id).first(); //first: retorna um único registro, id é único

    // Caso ponto não encontrado
    if (!point) {
      return response.status(400).json({ message: 'Point not found' });
    }

    /**
     * Itens que estão relacionados ao ponto
     * SELECT * FROM items
     *  JOIN point_items ON items_id = point_items.item_id
     *  WHERE point_items.point_id = { id }
     */
    const items = await knex('items')
      .join('point_items', 'items_id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title');

    // Ponto encontrado
    return response.json({ point, items });
  }

  // Criação de um ponto de coleta
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    // Transação - impede que uma query que dependa de outra continue executando mesmo após um erro em alguma delas
    const trx = await knex.transaction();

    const point = {
      image: 'https://picsum.photos/200',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    // Ids dos registros que foram inseridos
    const insertedIds = await trx('points').insert(point);

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id,
      };
    });

    // Relacionamento com a tabela de itens
    await trx('point_items').insert(pointItems);

    await trx.commit(); //realiza as inserções dos itens no banco

    return response.json({
      id: point_id,
      ...point, //todos os dados do ponto
    });
  }
}

export default PointsController;
