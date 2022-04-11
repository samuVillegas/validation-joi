const { Router } = require('express')
const router = Router();
const validator = require('express-joi-validation').createValidator({})
const carSchemas = require('../schemas/cars')


router.post('/cars',validator.body(carSchemas.bodySchema), (req,res)=>{
    console.log(req.body)
    res.send('Carro registrado correctamente')
})

router.delete('/cars/:id', validator.params(carSchemas.paramsSchema), (req,res) => {
    console.log(req.params)
    res.send('Carro eliminado correctamente')
})

module.exports = router;