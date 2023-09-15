const express = require('express');
const router = express.Router();
const validatorHandler = require('../../middlewares/validator.handler');
const {getUserSchema,createUserSchema,updateUserSchema} = require('./schema');

const ControllerUser = require('./controller.user');
const controller = new ControllerUser;

router.get('/:id',
    validatorHandler(getUserSchema,'params'),   
    async(req,res,next)=>{
        try{
            const {id} = req.params;
            const user = await controller.findOne(id);
            res.status(200).json(user);
        }catch(err){
            next(err);
        };
    },
);

router.post('/',
    validatorHandler(createUserSchema,'body'),
    async(req,res,next)=>{
        try{
            const body = req.body;
            const {username,password} = body;
            const newUser = await controller.create({username,password});
            res.status(200).json(newUser);
        }catch(err){
            next(err);
        };
    },

);

router.patch('/:id',
    validatorHandler(getUserSchema,'params'),
    validatorHandler(updateUserSchema,'body'),
    async(req,res,next)=>{
        try{
            const {id} = req.params;
            const body = req.body;
            const updateUser = await controller.update(id,body);
            res.status(201).json(updateUser);
        }catch(err){
            next(err);
        };
    }
);

module.exports = router;
