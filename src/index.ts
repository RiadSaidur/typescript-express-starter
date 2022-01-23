import Express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = Express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(Express.json())

// Routes


// MongoDB connection
const USERNAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DB_NAME
const mongodbURI = `mongodb+srv://${USERNAME}:${PASSWORD}@netjobs.jglqn.mongodb.net/${DATABASE}?retryWrites=true&w=majority`

mongoose.connect(mongodbURI)

mongoose.connection.on('connected', () => {
  console.log('connceted to DB')
  app.listen(PORT, () => console.log(`server stated on ${PORT}`))
})