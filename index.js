let express = require('express');
let app = express();

app.get('/', function (req, res) {
  res.send('Basic express app is up and running');
});

let port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () {
  console.log('Server started on port 3000!!!');
});
