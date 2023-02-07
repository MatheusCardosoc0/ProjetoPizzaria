import { prisma } from "../../utils"

interface OrderRemoveRequest{
  id: string
}

class RemoveOrderService{
  async execute({id}: OrderRemoveRequest){

    const removeOrder = await prisma.order.delete({
      where: {
        id
      }
    })

    return removeOrder
  }
}

export {RemoveOrderService}