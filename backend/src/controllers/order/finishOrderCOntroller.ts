import { Order } from "@prisma/client";
import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/finishOrderService";

class FinishOrdercontroller{
  async handle(req: Request, res: Response){

    const {id}: Order = req.body

    const finishOrder = new FinishOrderService()

    const order = await finishOrder.execute({
      id
    })

    return res.json(order)
  }
}

export {FinishOrdercontroller}