import * as yup from "yup"

const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    category_id: yup.number().nullable()
})

export default createProductSchema