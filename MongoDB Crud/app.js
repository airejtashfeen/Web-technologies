const {MongoClient}= require("mongodb");

const express= require('express');

const port= 3000;

const app= express();

app.use(express.json());

const uri= "mongodb://localhost:27017";

const dbName= "bookstore";

const collectionName= "books";

// const booksData = [
//     { name: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
//     { name: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
//     { name: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-age Fiction' },
//     { name: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Classic Fiction' },
//     { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Fiction' }
// ];

// async function connectAndInsert(){
//     try{
//         const client= await MongoClient.connect(uri);

//         console.log('Connected to MongoDB');
        
//         const db= client.db(dbName);
        
//         const result= await db.collection(collectionName).insertMany(booksData);
        
//         console.log(`${result.insertedCount} documents inserted`);
// }

//     catch{
//         console.error('Error inserting data into database')
//     }
// }

//Routes

app.get("/", (req,res)=>{
    res.sendFile(__dirname+ "/index.html");
})

//Post

app.post('/addBook', async (req, res) => {
    const { name, author, genre } = req.body;

    try {
        const client = await MongoClient.connect(uri);

        console.log('Connected to MongoDB');

        console.log(req.body);
        
        const db = client.db(dbName);

        const result = await db.collection(collectionName).insertOne({ name, author, genre });

        console.log(`${result.insertedCount} document inserted`);

        res.send(`Book added: ${name} by ${author}, Genre: ${genre}`);
    } catch (error) {
        console.error('Error adding a new book:', error);
        res.status(500).send('Internal Server Error');
    }
});

//Listen
app.listen(port, ()=>{
    console.log(`Server running on https://localhost:${port}`)
})
// connectAndInsert();