import { Item } from "@prisma/client";
import { Request, Response } from "express";
import { AddItemInOrderService } from "../../services/order/addItemInOrderService";

class AddItemInOrderController{
  async handle(req: Request, res: Response){

    const {amount, productsId, order_id}: Item = req.body

    const addItemService = new AddItemInOrderService()

    const Item = await addItemService.execute({
      amount,  
      order_id,
      productsId
    })

    return res.json(Item)
  }
}

export { AddItemInOrderController };