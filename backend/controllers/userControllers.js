import item from "../models/itemModel.js"
import user from "../models/userModel.js"
import { handleError } from "../util/handleError.js"
import { generateToken } from "../util/token.js"
import setImage from '../util/setImage.js'
import mongoose from 'mongoose'
import sanitize  from 'mongo-sanitize'
const ObjectId = mongoose.Types.ObjectId
//home
export const home_get = async (req, res) => {
    try {
        const items = await item.find()
        res.status(200).json({ success: true, message: 'successful fetching data', result: items })
    } catch (err) {
        const error = await handleError(err)
        res.status(404).json({ success: false, error })
    }

}

//login

export const login_post = async (req, res) => {
    const userData =sanitize(req.body) 
    console.log(userData);
    try {
        const userDetails = await user.login(userData.email, userData.password)
        if (userDetails) {
            const maxAge = 7 * 24 * 60 * 60 * 1000
            const token = await generateToken(userDetails.id)
            res.cookie('user', token, { maxAge: maxAge, })
            res.status(200).json({
                success: true,
                message: "Login successful",
                result: userDetails

            })
        }

    }
    catch (err) {
        console.log(err);
        const error = await handleError(err)
        res.status(404).json({ success: false, error })
    }
}
// signup

export const signup_post = async (req, res) => {
    const userData = req.body
    try {
        const createUser = new user({
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            password: userData.password
        })
        await createUser.save()
        res.status(200).json({
            success: true,
            message: "Signup successful",
        })
    }
    catch (err) {
        const error = await handleError(err)
        res.status(404).json({ success: false, error })
    }
}

//delete

export const logout_delete = (req, res) => {
    try {
        res.cookie('user', '', { maxAge: 1 })
        res.status(400).json({
            success: true
        })
    }
    catch (err) {

    }
}

//add post
export const add_post = async (req, res) => {
    try {
        const postData = req.body
        const image = await setImage(req.file)
        const itemData = new item({
            name: postData.name,
            category: postData.category,
            price: postData.price,
            image: image
        })

        await itemData.save()
        res.status(200).json({
            success: true, message: 'add post successful'
        })
    }
    catch (err) {
        const error = await handleError(err)
        res.status(404).json({ error })
    }
}

export const get_item = async (req, res) => {
    try {
        const itemId = req.params.id
        const itemData = await item.findOne({_id:new ObjectId(itemId)})
        res.status(200).json({success:true,message:'successful fetch item',result:itemData})
    }
    catch (err) {
        const error = await handleError(err)
        res.status(404).json({success:false,error})
    }

}