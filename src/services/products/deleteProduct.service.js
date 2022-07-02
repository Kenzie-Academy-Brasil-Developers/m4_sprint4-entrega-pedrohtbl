import database from "../../database"

const deleteProductService = async (id) =>{
    try {
        const productFind= await database.query(
            `
            SELECT * FROM products WHERE id = $1;
            `,[id]
        )

        if(!productFind.rowCount){
            throw new Error("Product not found")
        }

        const res = await database.query(
            `
            DELETE FROM products WHERE id = $1;
            `,[id]
        )
        
    } catch (error) {
        throw new Error(error)
    }
}

export default deleteProductService