const express = require('express');
const router = express.Router();
const {getNewsSchema,createNewsSchema,updateNewsSchema} = require('./schema');
const validatorHandler = require('../../middlewares/validator.handler');
const ControllerNews = require('./controller.news');
const controller = new ControllerNews();

router.get('/:id',
    async(req,res,next)=>{
        try{
            const {id} = req.params;
            const news = await controller.findOne(id);
            res.status(200).json(news);
        }catch(err){
            next(err);
        }
    }
);


router.patch('/:id',
    validatorHandler(getNewsSchema,'params'),
    validatorHandler(updateNewsSchema,'body'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const body = req.body;
            const updateNews = await controller.update(id,body);
            res.status(201).json(updateNews);
        } catch (error) {
            next(error);
        }
    },

);




router.post('/',
    validatorHandler(createNewsSchema,'body'),
    async(req,res,next)=>{
        try {   
            const {user,title,description,image} = req.body;
            const newNews = await controller.create(user,title,description,image);
            res.status(201).json(newNews);
        } catch (error) {
            next(error);
        }
    }
);


router.delete('/:id',
    validatorHandler(getNewsSchema,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const deleteNews = await controller.delete(id);
            res.status(200).json(deleteNews);
        } catch (error) {
            next(error);
        }
    }
);




module.exports = router;