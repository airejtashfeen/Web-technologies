const express= require('express')
const app = express();
const port = 3000;
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017",{useNewUrlParser: true,
useUnifiedTopology: true
}
).then((response)=>{
    console.log("Connection Successfull"+ response);
}).catch((error)=>{
        console.log("Error : "+error);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/signup', (req,res) => {
    res.send('/success');
})

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
})
app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
});