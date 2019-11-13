const express = require('express')
const router = express.Router()
const Plat = require('../models/plat')

//routes de toutes les plats
router.get('/', async(req, res) => {
   res.send('tous les plats')
})

//nouveaux plats route
router.get('/new', (req, res) => { 
    res.send('Nouveaux plats')
  })
  
//creation de plats routes
router.post('/', async(req, res) => {
    res.send('Creation de plats')
  })
  
module.exports = router