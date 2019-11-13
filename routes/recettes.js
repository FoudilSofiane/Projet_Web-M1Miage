const express = require('express')
const router = express.Router()
const Recette = require('../models/recette')

//routes de toutes les recettes
router.get('/', async(req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name!==''){
        searchOptions.name = new RegExp(req.query.name,'i')
    }
    try{
        const recettes = await Recette.find(searchOptions)
        res.render('recettes/index', {
            recettes: recettes, 
            searchOptions:req.query})
    }catch{
        res.redirect('/')
    }
})

//nouvelles recettes
router.get('/new', (req, res) => {
    res.render('recettes/new',{recette:new Recette() })
  })
  
//creation de recettes routes
router.post('/', async(req, res) => {
    const recette = new Recette({
        name: req.body.name
    })
    try{
        const newRecette = recette.save()
            res.redirect(`recettes/${newRecette.id}`)
            res.redirect(`recettes`)
    }catch{
        res.render('recettes/new',{
            recette : recette,
            errorMessage: 'Erreur lors de la creation de la recette'
        })
    }
  })
  
module.exports = router