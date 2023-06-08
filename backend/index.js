import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {config} from 'dotenv'
config()
// user Router
import userRouter from './routes/userRouters.js'
 
//conneting mongodb server 
import './config/connection.js'

const app = express()

// parsing json data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser())
app.use('/',userRouter)

app.listen(process.env.PORT, () => console.log(`server running on port: http//:localost:${process.env.PORT}`))

export default app
