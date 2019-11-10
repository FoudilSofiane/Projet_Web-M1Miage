const express = require('express')
const app =express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.set('layout', 'layouts/layout') //layouts issus du dossier layout
app.use(expressLayouts)
app.use(express.static('public')) //style, images, JavaScript

app.listen(process.env.PORT || 3000) //le serveur va écouter sur le port 3000