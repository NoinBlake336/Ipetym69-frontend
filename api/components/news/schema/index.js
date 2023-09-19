const Joi = require('joi');

const promps = {
    id:Joi.string(),
    user:Joi.string(),
    title:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
    enlace:Joi.string(),
}

const getNewsSchema = Joi.object({
    id:promps.id.required(),
});

const createNewsSchema = Joi.object({
    user:promps.user,
    title:promps.title,
    description:promps.description,
    image:promps.image,   
    enlace:promps.enlace,
});

const updateNewsSchema = Joi.object({
    title:promps.title,
    description:promps.description,
    image: promps.image,
    enlace:promps.enlace,
});


module.exports = {getNewsSchema,createNewsSchema,updateNewsSchema};