import { Request, Response } from "express";
import { AllCategoryService } from "../../services/category/allCategoryService";

class AllCategoryController{
  async handle(req: Request, res: Response){

    const allCategories = new AllCategoryService()

    const category = await allCategories.execute()

    return res.json(category)
  }
}

export {AllCategoryController}