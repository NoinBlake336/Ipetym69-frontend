require('dotenv').config();
const config = {
    port:process.env.PORT || 3000,
    uriDB:process.env.URLDB,
    secretKey:process.env.SECRETKEY, 
};

module.exports = {config};

