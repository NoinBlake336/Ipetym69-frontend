const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const username = Joi.string();
const password = Joi.string();

const getUserSchema = Joi.object({
    id:id.required(),
    username,
});

const createUserSchema = Joi.object({
    username:username.required(),
    password:password.required(),
})

const updateUserSchema = Joi.object({
    name:name,
    username:username,
    password:password,
});

module.exports = {getUserSchema,createUserSchema,updateUserSchema};