import express from 'express'
import { crew, destination, technology } from '../controlers/getData.js'

const spaceRoute = express.Router()

spaceRoute.get('/destination/:id',destination)
spaceRoute.get('/crew/:id',crew)
spaceRoute.get('/technology/:id',technology)

export default spaceRoute