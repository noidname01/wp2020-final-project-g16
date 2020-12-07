import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())

//routes