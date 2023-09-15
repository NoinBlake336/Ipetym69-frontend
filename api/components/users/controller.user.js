const bcrypt = require('bcrypt');
const UserServices = require('./service');
const service = new UserServices;

class ControllerUser {
    async findOne(id){
        const find = await service.getOneUser(id);
        return {find};
    };

    async create({username,password}){
        const newUser ={
            username:username,
            password:password,
            date: new Date(),
        };

        if(password){
            const hash = await bcrypt.hash(password,10);
            newUser.password =  hash;
        };

        console.log(newUser);
        const addUser = await service.addUser(newUser);

        return {addUser}
    };

    async getUsername(username){
        const user = await  service.getOneUsername(username);
        return {user};
    };

    async update(id,changes){
        const update = await service.updateUser(id,changes);
        return {update};
    };
};

module.exports = ControllerUser;