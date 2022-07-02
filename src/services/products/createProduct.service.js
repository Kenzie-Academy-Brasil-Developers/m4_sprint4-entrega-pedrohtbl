import database from "../../database"
import { v4 as uuidv4 } from "uuid"

const createProductService = async (data) =>{
    try {
        if(!data.category_id){
            data.category_id = null
        }

        if(data.category_id !== null){
            const findCategory = await database.query(
                `
                    SELECT *
                    FROM categories
                    WHERE 
                        id = $1;
                `,[data.category_id]
            )

            if(!findCategory.rowCount){
                data.category_id = null
            }
        }
        
        const values = Object.values(data)
        const res = await database.query(
            `
                INSERT INTO 
                    products(id,name,price,category_id)
                VALUES
                    ($1, $2, $3, $4)
                RETURNING *;
            `
            ,[uuidv4(),...values]
        )

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default createProductService