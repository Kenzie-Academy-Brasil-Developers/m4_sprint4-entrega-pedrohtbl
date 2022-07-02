import database from "../../database"

const updateProductService = async (id, data) => {
    try {

        const productFind = await database.query(
            `
            SELECT * FROM products WHERE id = $1;
            `,[id]
        )

        if(!productFind.rowCount){
            throw new Error("Product not found")
        }

        let query = "UPDATE products SET "
        const keys = Object.keys(data)
        const values = Object.values(data)

       
        keys.forEach((key,index) =>{
            query+= `${key} = \$${index+1}, `
        })

        query = query.slice(0, -2)

        query += `WHERE id = \$${keys.length+=1} RETURNING *;`

        const res = await database.query(
            query,
            [...values, id]
        )

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default updateProductService