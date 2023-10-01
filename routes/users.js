import express from 'express'


import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/user.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('hello user you are authenticated')
// })
// router.get('/checkuser/:id',verifyUser, (req, res, next) => {
//     res.send('hello user you are authenticated and you can  delete your account')
// })
// router.get('/checkadmin/:id',verifyAdmin, (req, res, next) => {
//     res.send('hello user you are authenticated and you can  delete all accounts')
// })

//create
router.post('/', verifyUser, createUser)

//update
router.put('/:id',verifyUser, updateUser)

//delete
router.delete('/:id',verifyUser, deleteUser)

//Get
router.get('/:id',verifyUser, getUser)

//Get all
router.get('/', verifyAdmin, getAllUsers)

export default router