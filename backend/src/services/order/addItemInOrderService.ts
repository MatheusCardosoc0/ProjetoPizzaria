import { prisma } from "../../utils"

interface ItemRequest{
  order_id: string
  productsId: string
  amount: number
}

class AddItemInOrderService{
  async execute({amount, order_id, productsId}: ItemRequest){

    const order = await prisma.item.create({
      data: {
        order_id,
        productsId,
        amount
      }
    })

    return order
  }
}

export {AddItemInOrderService}