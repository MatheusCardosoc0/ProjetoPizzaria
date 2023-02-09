import { prisma } from "../../utils";

interface DetaailOrderRequest{
  order_id: string
}

class DetailOrderService{
  async execute({order_id}: DetaailOrderRequest){
    const detailOrder = await prisma.item.findMany({
      where: {
        order_id,
      },
      include: {
        Order: true,
        Products: true
      }
    })

    return detailOrder
  }
}

export {DetailOrderService}