import {Request, Response} from 'express'
import { DetailOrderItemsService } from '../../services/order/DetailOrderItemsService'



class DetailOrderItems{
  async handle(req: Request, res: Response){
    const order_id = req.query.order_id as string;

    const detailOrderService = new DetailOrderItemsService();

    const orders = await detailOrderService.execute({
      order_id
    })

    return res.json(orders);

  }
}

export { DetailOrderItems }