const express = require('express')
const app = express()
const { Router } = express
const router = Router()
const Libreria = require('./contenedor')
const libreria = new Libreria('./files.json')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

router.get('/', (req, res)=>{
    res.json(libreria.array)
})
router.get('/:id', (req, res)=>{
    res.json(libreria.find(req.params.id))
})
router.post('/', (req, res)=>{
    res.json(libreria.insert(req.body))
})

router.put('/:id', (req, res)=>{
    res.json(libreria.update(req.params.id, req.body))
})

router.delete('/:id', (req, res)=>{
    res.json(libreria.deleteById(req.params.id))
})

app.use('/api/productos', router)

app.listen(8080)
