const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const app = express();


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    })
};

prepareAndStartServer();

