// Entry point of the program

const express = require('express');
const connectDB = require('./connection');
const urlRoute = require('./routes/url');
const URL = require('./model/url');


const app = express();
const port = 8000;

//middleware
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/short-url';


connectDB(url)
    .then(() => {
        console.log('Database connected');
    });


//Making different routes
app.use('/', urlRoute);

app.get('/:shortid', async (req, res) => {
    const shortId = req.params.shortid;

    const entry = await URL.findOneAndUpdate({
        shortid: shortId
    }, { $push: {
        visit: {
            timestamp: Date.now(),
        },
    } })

    res.redirect(entry.originalUrl);
});

//Starting the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});