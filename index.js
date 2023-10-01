import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import roomRoute from './routes/rooms.js'
import hotelRoute from './routes/hotels.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
dotenv.config()


app.use(express.json())

const connect = async () =>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log('Connected to mongoDB') 
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () =>{
    console.log('MongoDb disconnected')
})

mongoose.connection.on('connected', () =>{
    console.log('MongoDb connected')
})

app.get("/", (req, res) =>{
    res.send("Hello first ")
})

//middlewares
app.use(cors())
app.use(cookieParser())



app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/rooms', roomRoute)
app.use('/hotels', hotelRoute)

app.use((err, req, res, next) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something went wrong'

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})


app.listen('https://reservationapi.onrender.com' || 8080, () => {
    connect()
    console.log('Connected to backend')
})