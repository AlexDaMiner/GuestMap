const Message = require("./Message").Message
const express = require ('express');
const cors = require('cors');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

const app = express();
app.use(cors());

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, message: {} })
  .write()

app.get('/', (req, res) => {
  
  const message = db.get("message").value();
  db.update("message", (value) => {
    return value + "!"
  }).write();
  res.send({
    pippo: message
  })
});

app.listen(3000, () => {
  console.log('server started');
});