require('dotenv').config();
const express = require('express');

const volunteersRouter = require('./routers/volunteers.router.js')
const helpsRouter = require('./routers/helps.router.js')

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(express.json());

app.use('/api/volunteers',volunteersRouter)
app.use('/api/helps',helpsRouter);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('An error occurred, please try later...');

})

app.listen(port, host, () => {
    //here we can do stuff that should be done once the server is up
    console.log(`express server is running at http://${host}:${port}`);
})