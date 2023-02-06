import { hash } from "bcryptjs"
import { prisma } from "../../utils"

interface UserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService{
  async execute({email, name, password}: UserRequest ){
    
    if(!email) throw new Error("Email incorrect")

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if(userAlreadyExists) throw new Error("User already exists")

    const passwordHash = await hash(password, 8)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      },
      select: {
        email: true,
        id: true,
        name: true,
      }
    })

    return user
  }
}

export {CreateUserService}