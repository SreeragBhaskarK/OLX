import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
export const requestAuth = async (req, res, next) => {
    //get token
    const token = await req.cookies?.user
    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401).json({ success: false, message: "Permission denied" })
            } else {
                next()
            }
        })
    } else {
        res.status(401).json({ success: false, message: "Permission denied" })
    }

}