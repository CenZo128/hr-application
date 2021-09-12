const regionRoute = require('express').Router()
const RegionController = require('../controllers/RegionController')

regionRoute.get('/', RegionController.getRegions)
regionRoute.post('/', RegionController.add)
regionRoute.put('/:id', RegionController.update)
regionRoute.delete('/:id', RegionController.delete)

module.exports = regionRoute