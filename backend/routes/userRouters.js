import express from 'express'
import { home_get, login_post, signup_post,logout_delete, add_post,get_item } from '../controllers/userControllers.js'
import { requestAuth } from '../middleware/auth.js'
import upload from '../middleware/multer.js'
const router = express.Router()

//home
router.get('/',home_get)

//login
router.post('/login',login_post)

//signup
router.post('/signup',signup_post)

//logout
router.delete('/logout',logout_delete)

//add post
router.post('/add_post',upload.single('image'),add_post)

//get post 
router.get('/item/:id',get_item)

/* router.get('/test',(req,res)=>{
    res.send(`<form action='/login' method='post'> <input type='email' name='email' /> <input type='password' name='password'  /> <button type="submit">submit</button> </form>`)
})
 */
export default router;