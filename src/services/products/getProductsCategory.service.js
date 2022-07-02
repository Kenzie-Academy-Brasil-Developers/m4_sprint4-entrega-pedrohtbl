import database from "../../database"

const getProductsCategoryService = async (id) =>{
    try {
        const findCategory = await database.query(
            `
                SELECT * 
                FROM categories 
                WHERE 
                    id = $1;
            `,[id]
        )

            if(!findCategory.rowCount){
                throw new Error("Category not found")
            }

        const res = await database.query(
            `
            SELECT 
                p.name,
                p.price,
                c.name as category 
            FROM products p 
              JOIN categories c 
                    ON p.category_id = c.id 
            WHERE c.id = $1;
            `,[id]
        )

            return res.rows

    } catch (error) {
        throw new Error(error)
    }
}

export default getProductsCategoryService