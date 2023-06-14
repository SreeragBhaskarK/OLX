import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import { USER_COLLECTION } from '../config/collection.js'
import validator from 'validator'

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        minlength: [2, 'Minimum length of 2 characters'],
        maxlength: [50, 'Maximum length of 50 characters']
    },
    email: {
        type: String,
        unique: [true, 'Already used email'],
        required: [true, 'Please enter email'],
        validate: [validator.isEmail, 'Please enter vaild email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password']
    },
    phone: {
        type: String,
        unique: [true, 'Already used phone number'],
        validate: [validator.isMobilePhone, 'invalid phone number'],
        required: [true, 'Please enter phone number']
    }
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    const salt = 10
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function (email, password) {
    try {
        const user = await this.findOne({ email })
        if (user) {
            const result = await bcrypt.compare(password, user.password)
            if (result) {
                return user
            }
            throw new Error('incorrect password')
        }

        throw new Error('incorrect email')
    }
    catch (err) {
        throw err
    }

}

const user = model(USER_COLLECTION, userSchema)
export default user