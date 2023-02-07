import { Request, Response } from "express";
import { RemoveItemInOrderService } from "../../services/order/removeItemInOrderService";

class RemoveItemInOrderController{
  async handle(req: Request, res: Response){

    const id = req.query.id as string
    
    const removeItemSrvice = new RemoveItemInOrderService()

    const removeItem = await removeItemSrvice.execute({
      id
    })

    return res.json(removeItem)
  }
}

export {RemoveItemInOrderController}