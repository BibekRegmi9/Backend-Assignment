const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    })
};

prepareAndStartServer();