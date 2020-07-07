const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoute = require('./routes/posts')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Use Routes
app.get('/', (req, res) => {
    res.send('home page url')
});
app.use('/posts', postsRoute);

// Connect to Db
mongoose.connect(
    process.env.DB_CONNECTION || 'mongodb://localhost/restapidemo', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
    () => console.log('DB connected!')
);

// Setup server port
const port = process.env.PORT || 3000;
// Launch app  to listen to specified port
app.listen(port, function () {
     console.log(`Running app on port ${port}`);
});