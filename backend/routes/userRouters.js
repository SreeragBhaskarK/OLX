import express from 'express'
import { home_get, login_post, signup_post } from '../controllers/userControllers.js'
import { requestAuth } from '../middleware/auth.js'
const router = express.Router()

//home
router.get('/',requestAuth,home_get)

//login
router.post('/login',login_post)

//signup
router.post('/signup',signup_post)

export default router;