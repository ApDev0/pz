import { Request, Response } from 'express'
import { DetailOrderFinishedSerivce } from '../../services/order/DetailOrderFinishedSerivce'



class DetailOrderFinishedController {
  async handle(req: Request, res: Response) {
    const OrderDetail = new DetailOrderFinishedSerivce();

    const order = await OrderDetail.execute();

    return res.json(order);

  }
}

export { DetailOrderFinishedController }
