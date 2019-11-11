const mongoose = require('mongoose')

const recetteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('recette', recetteSchema)