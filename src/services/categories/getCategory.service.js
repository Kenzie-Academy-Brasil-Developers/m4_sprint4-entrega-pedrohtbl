import database from "../../database"

const getCategoryService = async (id) =>{
    try {
        const res = await database.query(
            `
                SELECT *
                FROM categories
                WHERE 
                    id = $1;
            `,[id]
        )

        if(!res.rowCount){
            throw new Error("Category not found")
        }

        return res.rows[0]

    } catch (error) {
        throw new Error(error)
    }
}

export default getCategoryService