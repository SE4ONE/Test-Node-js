const express = require('express');
const comu = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {

    res.send("Hello nueng.LTD");

})
app.listen(port, () => {
    debug("listen on port " + comu.green(port));
})