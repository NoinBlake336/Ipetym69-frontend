const {model,Schema} = require('mongoose');
const {transformObject} = require('../../../middlewares/transform.object');

const newsSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'UserModel',
        require:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    date:Date,
});


newsSchema.set('toJSON',{
    transform:transformObject.json,
});

const newsModel = model('NewsModel',newsSchema);

module.exports = newsModel;