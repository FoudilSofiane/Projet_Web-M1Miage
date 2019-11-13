const mongoose = require('mongoose')

const platSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    nbCalorie: {
        type: Number,
        required: true
    },
    nbPersonne: {
        type: Number,
        required: true
    },
    timePreparation: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        required : true,
        default : Date.now
    },
    coverImageName :{
        type: !String,
        required : true,
    },
    recette: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'Recette'
    }

})

module.exports = mongoose.model('recette', platSchema)