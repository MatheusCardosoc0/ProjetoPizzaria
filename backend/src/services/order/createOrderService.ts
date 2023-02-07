import { prisma } from "../../utils"

interface OrderRequest{
  table: number
  name: string
}

class CreateOrderService{
  async execute({name, table}: OrderRequest){

    const order = await prisma.order.create({
      data: {
        table,
        name
      }
    })

    return order
  }
}

export {CreateOrderService}