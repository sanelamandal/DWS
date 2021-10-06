const express = require("express");
const app = express();
const bodyParser = require('body-parser');  
const morgan = require("morgan");  
const db = require('./config/db.js');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/app/new", function(req,res) {
  let {name, note} = req.body;
  console.log(name, note);
  db.query('insert into notes (name, note) values($1, $2)', [name, note])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    })
});
  
app.get('/app/all_notes', function(req, res) {
  db.query('select id, name, note from notes')
   .then(response => {
       const result = response.rows;
       res.send(result);
    })
   .catch(err => {
       console.log(err);
   })
});

app.delete('/app/delete/:id', function(req, res) {
  let id = req.params.id;
  db.query('delete from notes where id = $1', [id])
  .then(() => {
    res.json({id}).status(200);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server started on port ${PORT}`));