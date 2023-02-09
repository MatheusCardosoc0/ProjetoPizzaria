import { Request, Response } from "express";
import { GetOrderService } from "../../services/order/getOrderService";

class GetOrderController{
  async handle(req: Request, res: Response){
    
    const getOrder = new GetOrderService()
    
    const order = await getOrder.execute()

    return res.json(order)
  }
}

export {GetOrderController}