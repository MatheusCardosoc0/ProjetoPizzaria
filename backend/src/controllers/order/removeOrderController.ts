import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/removeOrderservice";

class RemoveOrderController{
  async handle(req: Request, res: Response){

    const id = req.query.id as string

    const removeOrderService = new RemoveOrderService()

    const removeOrder = await removeOrderService.execute({
      id
    })

    return res.json(removeOrder)
  }
}

export { RemoveOrderController}