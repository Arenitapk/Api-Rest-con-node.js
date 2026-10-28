import { Router } from "express";
import { Delete, getAllProducts, getProductsById, post, put } from "../controllers/categoria.controller";

const router = Router()

router.get('/categoria', getAllProducts)

router.get('/productos/:id', getProductsById)

router.post('/productos', post)

router.put('/productos/:id', put)

router.delete('/productos/:id', Delete)


export const clientesRoutes = router