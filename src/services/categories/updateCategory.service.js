import database from "../../database"

const updateCategoryService = async (id, data) =>{
    try {
        const findCategory = await database.query(
            `
                SELECT
                    *
                FROM 
                 categories
                WHERE
                 id = $1;
            `, [id]
        )
        
        if(!findCategory.rowCount){
            throw new Error("Category not found")
        }

        let query = "UPDATE categories SET "
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

export default updateCategoryService