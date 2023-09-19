const boom = require('@hapi/boom');
const Model = require('../model'); 

class UserServices {
    async addUser(user){
        const myUser = new Model(user);
        myUser.save();
        return myUser;
    };

    async getOneUser(id){
        const user = await Model.findById(id)
        .populate({
            path:'news'
        });
        if(!user){
            throw boom.badRequest('Not user')
        }
        return user;
    };

    async getOneUsername(username){
        const user = await Model.find({username:username});
        return user[0];
    };

    async updateUser(id,change){
        const updateUser = await Model.findOneAndUpdate(
            {_id:id},
            {
                username:change.username,
                password:change.password,
                date:new Date(),
            },
            {new:true},
        );
        return updateUser;
    };


    
};

module.exports = UserServices;