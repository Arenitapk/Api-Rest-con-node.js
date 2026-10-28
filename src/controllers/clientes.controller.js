import { pool } from "../config/dataBase";

export const getAllProducts = async (req, res) => {
    try {
        
        const [rows] = await pool.query(
            'SELECT * FROM clientes'
        )

        res.json(rows)

    } catch (error) {
        res.status(500).json({error: "error mi papa"})
    }
}

export const getProductsById = async (req, res) => {

    const {id} = req.params

    const [rows] = await pool.query(
        'SELECT * FROM clientes WHERE id = ?', [id]
    )

    if (!rows.length) {
        res.status(404).json({error: `error en encontrar la id: ${id}`})
    } else {
        res.status(200).json(rows[0])
    }
}

export const post = async (req, res) => {

    const {nombre} = req.body

    try {
        const [rows] = await pool.query(
            'INSERT INTO clientes (nombre, correo, ciudad) VALUES (?,?,?)', [nombre, correo, ciudad]
        )
        res.status(201).json({
            id: rows.insert,
            nombre,
            correo,
            ciudad
        })
    } catch (error) {
        res.status(500).json({error: 'no se puede crear el producto'})
    }

}

export const put = async (req, res) => {
    const {nombre, correo, ciudad} = req.body
    const {id} = req.params

    try {
        const [rows] = await pool.query(
            'UPDATE clientes SET nombre = ?, correo = ?, ciudad = ? WHERE id = ?', [nombre, correo, ciudad, id]
        )
        if (rows.affectedRows === 0) {
            res.status(404).json({error: 'no se pudo actualizar el producto'})
        }
        res.status(200).json({
            id: Number(id),
            nombre,
            correo,
            ciudad
        })
    } catch (error) {
        res.status(500).json({error: 'no se pudo hacer la ejecucion no se porque alv'})
    }
}


export const Delete = async (req, res) => {
     const {id} = req.params

    const [rows] = await pool.query(
        'DELETE FROM clientes WHERE id = ?', [id]
    )

    if (rows.affectedRows === 0) {
        res.status(200).json({error: `no existe un cliente con id: ${id}`})
    }
    res.status(200).json({Eliminado: "Se elimino el cliente"})
}