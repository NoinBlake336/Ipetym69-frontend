const express = require('express');
const router = express.Router();
const {getRecourceSchema,createRecourceSchema,updateRecourceSchema} = require('./schema');
const validatorHandler = require('../../middlewares/validator.handler');
const ControllerRecources = require('./controller.resources');
const controller = new ControllerRecources();

router.get('/:id',
    async(req,res,next)=>{
        try{
            const {id} = req.params;
            const recource = await controller.findOne(id);
            res.status(200).json(recource);
        }catch(err){
            next(err);
        }
    }
);


router.patch('/:id',
    validatorHandler(getRecourceSchema,'params'),
    validatorHandler(updateRecourceSchema,'body'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const body = req.body;
            const updaterecource = await controller.update(id,body);
            res.status(201).json(updaterecource);
        } catch (error) {
            next(error);
        }
    },

);




router.post('/',
    validatorHandler(createRecourceSchema,'body'),
    async(req,res,next)=>{
        try {   
            const {user,title,description,image} = req.body;
            const newrecource = await controller.create(user,title,description,image);
            res.status(201).json(newrecource);
        } catch (error) {
            next(error);
        }
    }
);


router.delete('/:id',
    validatorHandler(getRecourceSchema,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const deleterecource = await controller.delete(id);
            res.status(200).json(deleterecource);
        } catch (error) {
            next(error);
        }
    }
);




module.exports = router;