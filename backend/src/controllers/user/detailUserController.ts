import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/detailUserServer";

class DetailUserController{
  async handle(req: Request, res: Response){
    const deatilUser = new DetailUserService()

    const user_id = req.user_id

    console.log(user_id)

    const user = await deatilUser.execute(user_id)

    return res.json(user)
  }
}

export { DetailUserController}