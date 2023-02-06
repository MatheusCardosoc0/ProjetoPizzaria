import { Router } from "express";
import { AllCategoryController } from "./controllers/category/allCategoryController";
import { CreateCategoryController } from "./controllers/category/createCategoryController";
import { AuthUserController } from "./controllers/user/authUserController";
import { CreateUserController } from "./controllers/user/createUserController";
import { DetailUserController } from "./controllers/user/detailUserController";
import { isAuthAuthenticated } from "./middlewares/isAuthenticated";

const router = Router()

//--- Rotas User ----

router.post('/registration', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userInfo', isAuthAuthenticated, new DetailUserController().handle)


//--- Rotas Category ---

router.post('/new_category',isAuthAuthenticated, new CreateCategoryController().handle)

router.get('/categories',isAuthAuthenticated, new AllCategoryController().handle)



export {router}