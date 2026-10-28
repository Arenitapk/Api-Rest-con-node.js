import { Router } from "express";
import { Delete, getAllProducts, getProductsById, post, put } from "../controllers/productos.controller.js";

const router = Router()

router.get('/productos', getAllProducts)

router.get('/productos/:id', getProductsById)

router.post('/productos', post)

router.put('/productos/:id', put)

router.delete('/productos/:id', Delete)

export const productosRoutes = router