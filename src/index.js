const http = require('http');
const hostname = '127.0.0.1';
require('dotenv').config()
const { default: mongoose } = require('mongoose');
const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const port = 3001;
const axios = require('axios').default;
const routes = require('./routes');
const app = express();
app.use(cors(config.corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));



app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors())
app.use(cookieParser())
connectDB();
routes(app);


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});