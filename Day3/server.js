// const { default: app } = require('../Day2/app');
const express = require('express');
const dotenv = require('dotenv')
dotenv.config();

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorMiddleware.js');
const notFound = require('./middlewares/notFound.js');

// route here(importing soon)



const app = express();

// body parser
app.use(express.json());

// Application level middleware // custom logger
 app.use(logger);

 // Routes
//  app.use("api/")

// Error handling middleware
app.use(errorHandler);

// 404 Handler (No route matched)
app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})