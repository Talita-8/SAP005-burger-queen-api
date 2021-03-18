const express = require('express') 
const routes = require('./server/routes/index')
const app = express()  
const port = 3000

app.use('/', routes);


app.get('/login/:user/:email/:role', (req, res) => {
  res.send("Welcome, " + req.params.user)
})

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 