const {Schema,model} = require('mongoose');
const { transformObject } =require('../../../middlewares/transform.object');


const userSchema = new Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    recources:[{
        type:Schema.Types.ObjectId,
        ref:'RecourcesModel',
    }],
    news:[{
        type:Schema.Types.ObjectId,
        ref:'NewsModel',
    }],
});

userSchema.set('toJSON',{
    transform:transformObject.json,
});

const userModel = model('UserModel',userSchema);

module.exports = userModel;
