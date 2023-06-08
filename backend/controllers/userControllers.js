import user from "../models/userModel.js"
import { handleError } from "../util/handleError.js"
import { generateToken } from "../util/token.js"


export const home_get = (req, res) => {
    res.send('hello')

}

export const login_post = async (req, res) => {
    const userData = req.body
    console.log(userData);
    try {
        const userDetails = await user.login(userData.email, userData.password)
        if (userData) {
            const maxAge = 7 * 24 * 60 * 60 * 1000
            const token = await generateToken(userDetails.id)
            res.cookie('user', token, { maxAge: maxAge, httpOnly:true })
            res.status(200).json({
                success: true,
                message: "Login successful",
                data: userDetails

            })
        }

    }
    catch (err) {
        const error = await handleError(err)
        res.status(404).json({success: false,error})
    }
}

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
        res.status(404).json({ success:false,error })
    }
}