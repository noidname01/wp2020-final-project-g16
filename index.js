const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')))

//routes


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
  });

const port = process.env.PORT || 5000
app.listen(port)

