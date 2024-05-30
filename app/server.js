const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./router/routes');

const options = {
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'Test  rest api',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:5000'
            },
        ]
    },
    apis: ['./router/*.js'], 

   
}

const openApiSpecification = swaggerJsdoc(options);

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(openApiSpecification));


app.listen(port,()=> {
    console.log(`Server running on port : ${port}`);
})