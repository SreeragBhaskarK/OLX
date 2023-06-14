
import multer from 'multer'
const storage = multer.memoryStorage({
   /*  destination: function (req, file, cb) {
        cb(null, './images/products_images')
    }, */
   
   /*  filename: function (req, file, cb) {
         return cb(null, `${Date.now()}-${file.originalname}`)

    } */
})

const upload = multer({ storage: storage })
export default  upload