import { prisma } from "../../utils";

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService{
  async execute({banner, category_id, description, name, price}: ProductRequest){

    const verify = await prisma.category.findFirst({
      where: {
        id: category_id
      }
    })

    if(!verify) throw new Error('Category not exist')

    const newProduct = await prisma.products.create({
      data: {
        banner,
        category_id,
        description,
        name,
        price
      }
    })

    return newProduct
  }
}

export {CreateProductService}