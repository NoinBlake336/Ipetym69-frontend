require('dotenv').config();
const config = {
    port:process.env.PORT || 3000,
    uriDB:process.env.URLDB || 'mongodb+srv://pageIpetym69:ipetym692024@cluster0.xaxibxw.mongodb.net/?retryWrites=true&w=majority',
    secretKey:process.env.SECRETKEY || "secretPageKeyJWT", 
};

module.exports = {config};

