const UserServices = require("../users/service");
const newsServices = require('./service');
const service = new newsServices();
const USER = new UserServices();

class ControllerNews {
    async create(user,title,description,image){
        const userId  = await USER.getOneUser(user);
        const fullNews = {
            user: userId._id,
            title:title,
            description:description,
            image:image,
            date: new Date(),
        };
        
        const addNews = await service.addNews(fullNews,userId);

        return {
            addNews,
        }
    }
    async findOne(id){
        const news = await service.getOneNews(id);
        return {news};
    };

    async update(id,changes){
        const update = await service.updateNews(id,changes);
        return {update};
    };

    async delete(id){
        const remove = await service.removeNews(id);
        return { 
            message:'Delete News',
        };
    };
};




module.exports = ControllerNews;