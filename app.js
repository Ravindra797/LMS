const express = require("express");
const path = require("path");
const booksData = require("./data.js");
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  
app.use(express.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
    res.render('index', { booksData });  
});

app.get('/', (req, res) => {
    res.send("This is Home Page.");
});




app.listen(8080, () => {
    console.log("Server is Started....");
});
