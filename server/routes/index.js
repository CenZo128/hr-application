const route = require('express').Router()

route.get('/', (req, res) => {
    res.status(200).json({
        message: "Home Page"
    })
})

const regionRoutes = require('./region');
route.use('/regions', regionRoutes)

module.exports = route;