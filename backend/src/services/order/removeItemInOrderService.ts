import { prisma } from "../../utils";

interface ItemRequest{
  id: string
}

class RemoveItemInOrderService{
  async execute({id}: ItemRequest){
    const removeItem = await prisma.item.delete({
      where: {
        id
      }
    })

    return removeItem
  }
}

export {RemoveItemInOrderService}