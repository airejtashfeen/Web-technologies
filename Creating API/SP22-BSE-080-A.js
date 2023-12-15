const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

const footballers = [
  { name: "Lionel Messi", team: "Argentina" },
  { name: "Luis Suarez", team: "Uruguay" },
  { name: "Cristiano Ronaldo", team: "Portugal" }
];

app.get("/", function (req, res) {
  res.send("This is a Footballer list API");
});

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

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});