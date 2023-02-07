import { Request, Response } from "express";
import { ListProductByCategorySevice } from "../../services/product/listProductByCategoryService";

class ListProductByCategoryController{
  async handle(req: Request, res: Response){
    const category_id = req.query.category_id as string

    const productByCategory = new ListProductByCategorySevice()

    const products = await productByCategory.execute({
      category_id
    })

    return res.json(products)
  }
}

export {ListProductByCategoryController}