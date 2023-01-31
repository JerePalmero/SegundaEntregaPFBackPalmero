import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productCollection = 'products'

const productSchema = new mongoose.Schema({
    destino: String,
    description: String,
    code: {
        type: String,
        unique: true
    },
    price: Number,
    status: {
        type: Boolean,
        default: true
    },
    disponibles: Number,
    categories: [String],
    thumbnails: [String]
})

productSchema.plugin(mongoosePaginate)

mongoose.set("strictQuery", false);
const productModel = mongoose.model(productCollection, productSchema)

export default productModel