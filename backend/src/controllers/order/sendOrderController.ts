import { Order } from "@prisma/client";
import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/sendOrderService";

class SendOrderController{
  async handle(req: Request, res: Response){

    const {id}: Order = req.body
    
    const sendOrder = new SendOrderService()

    const order = await sendOrder.execute({
      order_id: id
    })

    return res.json(order)
  }
}

export {SendOrderController}