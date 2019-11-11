if(process.env.NODE_ENV !== 'production') { //vérifier si on est dans l'environnement de prod
    require('dotenv').config() //va charger les variables du fichier .env dans la variable process.env si on est dans l'environnement de développement
}

const express = require('express') //importer la librairie Express
const app = express()
const expressLayouts = require('express-ejs-layouts') //importer le package avec les layouts
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index') //va récupérer infos à partir du fichier index dans le dossier routes
const recetteRouter = require('./routes/recettes')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') //vues issues du dossier views
app.set('layout', 'layouts/layout') //layouts issus du dossier layout
app.use(expressLayouts)
app.use(express.static('public')) //style, images, JavaScript
app.use(bodyParser.urlencoded({ limit:'10mb', extended:false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}) //connnexion au serveur, option config MongoDB
const db = mongoose.connection
db.on('Erreur lors de la connexion', error => console.error(error))
db.once('open', () => console.log('Connecté à Mongoose'))


app.use('/', indexRouter)
app.use('/recettes', recetteRouter)

app.listen(process.env.PORT || 3000) //le serveur va écouter sur le port 3000

