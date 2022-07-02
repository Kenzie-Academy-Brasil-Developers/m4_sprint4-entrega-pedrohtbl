import database from "../../database"

const deleteCategoryService = async (id) =>{
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

        const res = await database.query(
            `
                DELETE FROM categories
                WHERE id = $1
            `,[id]
        )

    } catch (error) {
        throw new Error(error)
    }
}

export default deleteCategoryService