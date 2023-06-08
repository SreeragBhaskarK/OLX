import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config
const maxAge = 7 * 24 * 60 * 60 * 1000
export const generateToken = (id) => {
    return jwt.sign({id},'process.env.JWT_SECRET_KEY',{
        expiresIn:maxAge
    })
}