import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

//routes

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

const port = process.env.port || 4000
app.listen(port)

