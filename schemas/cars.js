const Joi = require('joi')


const bodySchema = Joi.object({
    name: Joi.string().required(),
    model: Joi.string().max(4).required(),
    mark: Joi.string().required()
})

const paramsSchema = Joi.object({
    id: Joi.number().min(0).max(100)
})

module.exports = {bodySchema,paramsSchema}

