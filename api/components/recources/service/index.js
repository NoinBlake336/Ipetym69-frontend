const boom = require('@hapi/boom');
const Model = require('../model');

class recourceServices {
    async addRecources(Recources,userId){
        const myRecources = await new Model(Recources);
        myRecources.save();
        userId.recources = userId.recources.concat(myRecources._id);
        await userId.save();

        return myRecources;
    };

    async getOneRecources(id){
        const Recources = await Model.findById(id).populate('user');
        if(!Recources){
            throw boom.notFound('non-exixtent Recources'); 
        };
        return Recources;
    };

    async updateRecources(id,changes){
        const updateRecources = await Model.findOneAndUpdate(
            {_id:id},
            {title:changes.title,
            description:changes.description,
            image:changes.image,
            date:new Date()},
            {new:true},
        );

        return updateRecources;
    };

    async removeRecources(id){
        const Recources = await Model.findByIdAndDelete({
            _id:id,
        });

        return Recources;
    }
};




module.exports = recourceServices;