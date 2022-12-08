const express = require("express");
const app = express();
const {Books} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

app.get('/', (req, res) => {
    res.send("Successful request sent to server")
})

// Get all books from Books DB with endpoint "/books"



//Get specific book from Books DB based on number specified in URL Path



app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})