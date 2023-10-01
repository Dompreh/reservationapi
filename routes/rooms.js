import express from 'express'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//create
router.post('/:hotelid',verifyAdmin, createRoom)

//update
router.put('/:id',verifyAdmin, updateRoom)
router.put('/availability/:id',updateRoomAvailability)

//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)



//Get
router.get('/:id', getRoom)

//Get all
router.get('/', getAllRooms)


export default router