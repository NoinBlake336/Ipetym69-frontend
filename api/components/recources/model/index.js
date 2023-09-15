const {model,Schema} = require('mongoose');
const {transformObject} = require('../../../middlewares/transform.object');

const recourceSchema = new Schema({
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


recourceSchema.set('toJSON',{
    transform:transformObject.json,
});

const recourceModel = model('RecourcesModel',recourceSchema);

module.exports = recourceModel;