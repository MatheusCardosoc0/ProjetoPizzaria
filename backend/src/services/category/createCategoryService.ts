import { prisma } from "../../utils"

interface CategoryResquest{
  name: string
}

class CreateCategoryService{
  async execute({name}: CategoryResquest){

    if(name === '') throw new Error('Name invalid')

    const category = await prisma.category.create({
      data: {
        name: name
      },
      select: {
        id: true,
        name: true
      }
    })

    return category
  }
}

export {CreateCategoryService}