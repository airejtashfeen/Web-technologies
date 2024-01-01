const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const footballers = [
  { name: "Lionel Messi", team: "Argentina" },
  { name: "Luis Suarez", team: "Uruguay" },
  { name: "Cristiano Ronaldo", team: "Portugal" }
];

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get("/api/footballers", function (req, res) {
  res.send(footballers);
});

app.get("/api/footballers/:index", function (req, res) {
  if (!footballers[req.params.index])
    return res.status(404).send("Footballer not found");
  res.send(footballers[req.params.index]);
});

app.put("/api/footballers/:index", function (req, res) {
  if (!footballers[req.params.index])
    return res.status(404).send("Footballer not found");

  const updatedFootballer = {
    name: req.body.name,
    team: req.body.team
  };

  footballers[req.params.index] = updatedFootballer;
  res.send(updatedFootballer);
});

app.delete("/api/footballers/:index", function (req, res) {
  if (!footballers[req.params.index])
    return res.status(404).send("Footballer not found");

  footballers.splice(req.params.index, 1);
  res.send(footballers);
});

app.post("/api/footballers", function (req, res) {
  const newFootballer = {
    name: req.body.name,
    team: req.body.team
  };

  footballers.push(newFootballer);
  res.send(newFootballer);
});

const cricketers=[
  {name: "Babar Azam", team:"Pakistan"},
  {name: "Virat Kohli", team:"India"},
  {name: "Jos Butler", team:"England"}
]

app.get("/cricketers", function(req,res){
res.send("This is a page for cricketers");
});

app.get("/API/cricketers", function(req,res){
  res.send(cricketers);
  });

  
  
app.get("/API/cricketers/:index", function (req,res){
  if(!cricketers[req.params.index])
    return res.status(404).send("Cricketer not here");
  res.send(cricketers[req.params.index]);
  });

app.put("/API/cricketers/:index", function(req,res){
  if(!cricketers[req.params.index])
  return res.status(404).send("Cricketer not found");

  const updatedCrickerer={
    name: req.body.name,
    team: req.body.team
  };
})

app.put("/api/footballers/:index", function (req, res) {
  if (!footballers[req.params.index])
    return res.status(404).send("Footballer not found");

  const updatedFootballer = {
    name: req.body.name,
    team: req.body.team
  };

  footballers[req.params.index] = updatedFootballer;
  res.send(updatedFootballer);
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});

