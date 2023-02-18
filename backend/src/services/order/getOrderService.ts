import { prisma } from "../../utils";

class GetOrderService{
  async execute(){

    const getOrder = await prisma.order.findMany({
      where: {
        draft: true,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    return getOrder
  }
}

export {GetOrderService}