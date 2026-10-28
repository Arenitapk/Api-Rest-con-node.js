import express from 'express'
import { productosRoutes } from './routes/productos.routes.js'
import { categoriaRoutes } from './routes/categoria.routes.js'

const app = express()

app.use(express.json())

app.use(productosRoutes)
app.use(categoriaRoutes)

const PORT = process.env.PORT
app.listen(PORT,
    console.log(`Server running in the port: ${PORT}`)
)
