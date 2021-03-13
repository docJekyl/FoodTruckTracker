const express = require('express');
const path = ('path');

const app = express();

const PORT = 3000;

app.use(express.static(__dirname + '/../public'))

app.get('/foodTrucks', (req, res) => {
  console.log('hello from FTServer')
})

app.listen(PORT, function() {
  console.log(`Server is listening to PORT ${PORT} `)
})
