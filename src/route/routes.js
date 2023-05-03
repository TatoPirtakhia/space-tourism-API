import express from 'express'
import { crew, destination, technology } from '../controlers/getData.js'

const spaceRoute = express.Router()

spaceRoute.get('/destination',destination)
spaceRoute.get('/crew',crew)
spaceRoute.get('/technology',technology)

export default spaceRoute