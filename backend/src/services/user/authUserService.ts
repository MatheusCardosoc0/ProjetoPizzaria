import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { prisma } from "../../utils"

interface AuthRequest{
  email: string
  password: string
}

class AuthUserservice{
  async execute({email, password}: AuthRequest){
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    //verifications
    if(!user) throw new Error('User not exists')

    const passwordMath = await compare(password, user.password)

    if(!passwordMath) throw new Error('User not exists')

    //token

  const token = sign({
    name: user.name,
    email: user.email
    }, 
    process.env.JWT_SECRET,
    {
    subject: user.id,
    expiresIn: '30d'
    } 
  )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}

export {AuthUserservice}