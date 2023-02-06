import { Request, Response } from "express";
import { AuthUserservice } from "../../services/user/authUserService";

class AuthUserController{
  async handle(req: Request, res: Response){
    const {password, email} = req.body

    const authUserservice = new AuthUserservice()

    const auth = await authUserservice.execute({
      email,
      password
    })

    return res.json(auth)
  }
}

export {AuthUserController}