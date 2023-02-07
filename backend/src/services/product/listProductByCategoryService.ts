import { prisma } from "../../utils"

interface ProductRequest{
  category_id: string
}

class ListProductByCategorySevice{
  async execute({category_id}: ProductRequest){

    const productByCategory = await prisma.products.findMany({
      where: {
        category_id
      }
    })

    return productByCategory

  }
}

export {ListProductByCategorySevice}