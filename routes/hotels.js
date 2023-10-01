import express from 'express'
import { createHotel, deleteHotel, getAllHotels, updateHotel,getHotel, countByCity, countByType, getHotelRooms } from '../controllers/hotel.js'
import Hotel from '../models/Hotel.js'
import { createrror } from '../utils/error.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

//create
router.post('/',verifyAdmin, createHotel)

//update
router.put('/:id',verifyAdmin, updateHotel)

//delete
router.delete('/:id', verifyAdmin, deleteHotel)

//Get
router.get('/find/:id', getHotel)

//Get all
router.get('/', getAllHotels)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:id', getHotelRooms)


export default router