const express = require('express');
const app = express();
const cors = require('cors');
const Router = require('./router');
const bodyParser = require('body-parser');
const {logErrors,errorHandler,boomErrorHandler} = require('./middlewares/error.handler');
const {config} = require('./config/index');
const connectDB = require('./db/libs');
const authenticateToken = require('./middlewares/authenticate.token');
const corsOptions = {
  origin: 'http://example.com', // Reemplaza 'http://example.com' con la URL de tu página específica
  methods: ['GET', 'POST'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
};
require('./utils/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors(corsOptions))


connectDB();

app.get('/',
    async(req,res,next)=>{
        res.send('/Bienvenido a mi server');
    }
)

app.get('/dashboard',
    authenticateToken,
    async(req,res,next)=>{
        res.send('hola');
    }
);



Router(app);
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(config.port,()=>{
    console.log(config.port);
});
