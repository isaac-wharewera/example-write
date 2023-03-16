const express = require('express')
const hbs = require('express-handlebars')
const fs = require('node:fs/promises')

const userRoutes = require('./routes/users')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)
// testing

// server.get('/', (req, res) => {
//   fs.readFile(__dirname + '/data/name.json', 'utf-8')
//   res.render('index')
// })

// server.post('/name/display', (req, res) => {
//   const nameInput = req.body.name
//   console.log(nameInput)
//   const stringifiedName = JSON.stringify(nameInput)
//   console.log(stringifiedName)
//   fs.writeFile(__dirname + '/data/name.json', stringifiedName)
//     .then(() => {
//       res.redirect('/name/display')
//     })
//     .catch((err) => {
//       res.status(404).send(err.message)
//     })
// })

// server.get('/name/display', (req, res) => {
//   fs.readFile(__dirname + '/data/name.json')
//     .then((name) => {
//       const parsedName = JSON.parse(name)
//       const obj = {
//         name: parsedName,
//       }

//       res.render('display', obj)
//       // res.render('gamepage', { name })
//     })
//     .catch((err) => {
//       res.status(404).send(err.message)
//     })
// })

module.exports = server
