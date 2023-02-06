import { prisma } from "../../utils"

class AllCategoryService{
  async execute(){
    const allCategories = await prisma.category.findMany({
      select: {
        id: true,
        name: true
      }
    })

    return allCategories
  }
}

export {AllCategoryService}