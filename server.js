const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const express = require("express");
const app = express()
const fs = require("fs")
const bookObj = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
const bookArr = bookObj.books

app.use(express.json());

app.post("/books", (req, res) => {
    const bookdata = req.body;
    bookArr.push(bookdata)
    updateFile(bookObj)
    res.send(bookArr)
})


const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);