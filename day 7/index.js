const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendStatus(200);
    res.send("Hellow")
});

// CRUD => get, post, put, delete ;

// status codes:
//200 : OK
// 201 : updated successfully
// 400: client side error
// 500: server side error

app.get('/products', (res, req) => {
    res.send("product page");
})

// b  is conditional:
app.get('/ab?cd', (req, res) => {
    res.send("abcd or acd");
})

// kitne bhi  b hon beech mein
app.get('/ab+cd', (req, res) => {
    res.send("abbbbbbbbbbbbbbbbbbcd");
})

// ab ke baad last mein ab cd ana chahiye:
app.get('/ab*cd', (req, res) => {
    res.send("ab6484s84ads46ad65dcd");
})

// using regex to define pattern for it
app.get(/a/, (req, res) => {
    res.send("a ke baad kuch bhi koi farak nahi padta :)");
})

// find a pattern ir this string somewhere:
app.get(/.*fly$/, (req, res) => {
    res.send("let us fly");
})

app.get('/users/:userID/books/:booksID', (req, res) => {
    console.log(req.query);
    res.send(req.params.userID);

})


app.listen(5000);