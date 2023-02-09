import { prisma } from "../../utils"

interface FinishOrderRequest{
  id: string
}

class FinishOrderService{
  async execute({id}: FinishOrderRequest){

    const finishOrder = await prisma.order.update({
      where: {
        id
      },
      data: {
        status: true
      }
    })

    return finishOrder
  }
}

export {FinishOrderService}