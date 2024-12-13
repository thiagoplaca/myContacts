const express = require('express')
const routes = require('./routes')
require('express-async-errors')

const PORT = 3001

const app = express()

app.use(express.json())
app.use(routes)
app.use((error, request, response , next) => {
  console.log(Error);
  response.sendStatus(500)
})

app.listen(PORT, () => {
  console.log(`Server Started at http:localhost:${PORT}`)
})
