import { prisma } from "../../utils"

class DetailUserService{
  async execute(user_id: string){

    const user = await prisma.user.findFirst({
      where: {
        id: user_id
      },
      select: {
        name: true,
        email: true,
        id: true
      }
    })

    return user
  }
}

export {DetailUserService}