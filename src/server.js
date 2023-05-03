import bodyParser from 'body-parser'
import express  from 'express'
import dotenv from "dotenv"
import connect from './database/mongo.js'
import spaceRoute from './route/routes.js'
import swaggerMiddleware from './middlewares/middleware.js'
import cors from "cors"
const app = express()
dotenv.config()

app.use(bodyParser.json())
connect()
app.use(cors());
app.use("/images", express.static("public/storage"));
app.use('/api',spaceRoute)
app.use("/", ...swaggerMiddleware())

app.listen(process.env.PORT || 3000)