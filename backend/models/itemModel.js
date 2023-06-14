import { Schema, model } from 'mongoose'
import { ITEM_COLLECTION } from '../config/collection.js'
import validator from 'validator'

const itemSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter item name'],
        minlength: [2, 'Minimum length of 2 characters'],
        maxlength: [50, 'Maximum length of 50 characters']
    },
    category: {
        type: String,
        required: [true, "Please enter item category"],
        minlength: [1, 'Minimum length of 1 characters'],
    },
    price: {
        type: Number,
        required: [true, "Please enter item price"]
    },
    image: [{
        type: String,
        required: [true, "Please upload imgaes"]
    }]
}, { timestamps: true })


const item = model(ITEM_COLLECTION, itemSchema)
export default item