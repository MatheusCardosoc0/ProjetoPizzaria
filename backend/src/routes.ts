import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/multer'

import { AllCategoryController } from "./controllers/category/allCategoryController";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { AddItemInOrderController } from "./controllers/order/addItemInOrderController";
import { CreateOrderController } from "./controllers/order/createOrderController";
import { RemoveItemInOrderController } from "./controllers/order/removeItemInOrderController";
import { RemoveOrderController } from "./controllers/order/removeOrderController";
import { SendOrderController } from "./controllers/order/sendOrderController";
import { CreateProductController } from "./controllers/product/createProductController";
import { ListProductByCategoryController } from "./controllers/product/listProductByCategoryController";

import { AuthUserController } from "./controllers/user/authUserController";
import { CreateUserController } from "./controllers/user/createUserController";
import { DetailUserController } from "./controllers/user/detailUserController";

import { isAuthAuthenticated } from "./middlewares/isAuthenticated";

const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

//--- Rotas User ----

router.post('/registration', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userInfo', isAuthAuthenticated, new DetailUserController().handle)


//--- Rotas Category ---

router.post('/new_category',isAuthAuthenticated, new CreateCategoryController().handle)

router.get('/categories',isAuthAuthenticated, new AllCategoryController().handle)


//--- Product routes ---

router.post('/product', isAuthAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthAuthenticated, new ListProductByCategoryController().handle)


//--- Order Routes ---

router.post('/order', isAuthAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthAuthenticated, new RemoveOrderController().handle)

router.post('/order/item', isAuthAuthenticated, new AddItemInOrderController().handle)

router.delete('/order/item', isAuthAuthenticated, new RemoveItemInOrderController().handle)

router.put('/order/send', isAuthAuthenticated, new SendOrderController().handle)

export {router}