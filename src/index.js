const express = require('express')
const routes = require('./routes')
const cors = require('./app/middlewares/cors')
const errorHandler = require('./app/middlewares/errorHandler')

require('express-async-errors')

const PORT = 3001

const app = express()

app.use(express.json())
app.use(cors)
app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server Started at http:localhost:${PORT}`)
})

