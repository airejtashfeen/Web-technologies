const express = require("express");

const port = 3000;

const app = express();

const {connectToDb, getDb}= require('./db');
const { ObjectId } = require("mongodb");

let db
connectToDb ((err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        })

        db= getDb()
    }
})

// Routes

app.get('/', (req, res) => {
    res.send('Hello, this is the root of the API');
});

app.get('/books', (req, res) => {

    let books= []
    db.collection('books')
    .find()
    .sort({author: 1})
    .forEach(book=> books.push(book))
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error: 'Could not fetch the documents'})
    })
});

app.get('/books/:id', (req,res)=>{
    db.collection('books')
    .findOne({_id: ObjectId(req.params.id)})
    .then(doc=>{
        res.status(200).json(doc)
    })
    .catch(err=>{
        res.status(500).json({error: "Could not fetch the document"})
    })
})


db.books.insertMany(
    [{
        name:"Jannat ke Pattay",
        author: "Nimrah Ahmed",
        genre: "Fiction",
    },
    {
        name:"Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Self Help",  
    }]
)

db.books.find({name:"Peer e Kaamil"})