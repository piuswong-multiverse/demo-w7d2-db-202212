const express = require("express");
const app = express();
const {Books} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

app.get('/', (req, res) => {
    res.send("Successful request sent to server")
})

// Get all books from Books DB with endpoint "/books"
app.get('/books', async (req, res) => {
    // get all books...
    let books = await Books.findAll();
    // send them out as a response...
    res.json(books);
})

//Get specific book from Books DB based on number specified in URL Path
app.get('/books/:id', async (req, res) => {
    // get single book
    let book = await Books.findByPk(req.params.id);
    // send it out
    res.send(book);
})

app.get('*', (req, res) => {
    res.send("BLAHBLHABLHA");
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})