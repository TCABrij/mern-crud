import express from 'express'
import addUser from '../controller/addUser.js'
import deleteUser from '../controller/deleteUser.js'
import homeController from '../controller/home.js'
import updateUser from '../controller/updateUser.js'
const router = express.Router()

router.post("/adduser", addUser)
router.get('/', homeController)
router.get("/delete/:id", deleteUser)
router.post("/update/:id", updateUser)


export default router;