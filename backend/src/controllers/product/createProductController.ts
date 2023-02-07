import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/createProductService";

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductController{
  async handle(req: Request, res: Response ){
    const {category_id, description, name, price}: ProductRequest = req.body

    const productService = new CreateProductService()

    if(!req.file) throw new Error("Error upload file")
    else {

      const {originalname, filename: banner} = req.file

      const product = await productService.execute({
        banner,
        category_id,
        description,
        name,
        price
      })
  
      return res.json(product)
    }
  }
}

export {CreateProductController}