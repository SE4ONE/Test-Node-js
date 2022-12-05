const express = require('express');
const comu = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const PORT = process.env.PORT;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("view", "./src/views");
app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render('index', { username: 'nuengza55+' });

})
app.listen(PORT, () => {
    debug("listen on port " + comu.green(PORT));
})