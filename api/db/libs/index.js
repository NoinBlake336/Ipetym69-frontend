require('dotenv').config();
const mongoose = require('mongoose');
const {config} = require('../../config');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(config.uriDB,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
            dbName:'PageCole'
        });
        console.log('mongo database is connected!!');
        process.on('SIGINT', function(){
            mongoose.connection.close(function(){
                console.log('Disconnection');
                process.exit(0);
            });
        });
    }catch(err){
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

module.exports = connectDB;