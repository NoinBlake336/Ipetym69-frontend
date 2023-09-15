const UserServices = require("../users/service");
const recourceServices = require('./service');
const service = new recourceServices();
const USER = new UserServices();

class ControllerRecources {
    async create(user,title,description,image){
        const userId  = await USER.getOneUser(user);
        const fullRecources = {
            user: userId._id,
            title:title,
            description:description,
            image:image,
            date: new Date(),
        };
        
        const addRecources = await service.addRecources(fullRecources,userId);

        return {
            addRecources,
        }
    }
    async findOne(id){
        const Recources = await service.getOneRecources(id);
        return {Recources};
    };

    async update(id,changes){
        const update = await service.updateRecources(id,changes);
        return {update};
    };

    async delete(id){
        const remove = await service.removeRecources(id);
        return { 
            message:'Delete Recources',
        };
    };
};




module.exports = ControllerRecources;