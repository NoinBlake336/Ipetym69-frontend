const express = require('express');
const userRouter = require('../components/users');
const newsRouter = require('../components/news');
const recourceRouter = require('../components/recources');
const authRouter = require('../components/auth');
const Router = (app)=>{
    const router = express.Router();
    app.use('/api',router);
    router.use('/users',userRouter);
    router.use('/news',newsRouter);
    router.use('/recources',recourceRouter);
    router.use('/auth', authRouter);
};

module.exports = Router;