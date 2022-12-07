const express = require('express');
const comu = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');
const productRounter = express.Router();
const app = express();
const PORT = process.env.PORT;


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")


productRounter.route("/").get((req, res) => {
    res.render("products")
});
productRounter.route("/1").get((req, res) => {
    res.send("hello world")
});
app.use("/products", productRounter);
app.get("/", (req, res) => {

    res.render('index', { username: 'Nuengza55+', customers: ["Nueng", "tong", "M111", "amm", "sai"] });

})
app.listen(PORT, () => {
    debug("listen on port " + comu.green(PORT));
})