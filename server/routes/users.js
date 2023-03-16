const express = require('express')
const fs = require('node:fs/promises')
const router = express.Router()
const path = require('node:path')

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/name.json'), 'utf-8')
  res.render('index')
})

router.post('/name/display', (req, res) => {
  const nameInput = req.body.name
  console.log(nameInput)
  const stringifiedName = JSON.stringify(nameInput)
  console.log(stringifiedName)
  fs.writeFile(path.join(__dirname, '../data/name.json'), stringifiedName)
    .then(() => {
      res.redirect('/name/display')
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

router.get('/name/display', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/name.json'))
    .then((name) => {
      const parsedName = JSON.parse(name)
      const obj = {
        name: parsedName,
      }

      res.render('display', obj)
      // res.render('gamepage', { name })
    })
    .catch((err) => {
      res.status(404).send(err.message)
    })
})

module.exports = router
