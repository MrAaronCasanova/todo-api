let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

let port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function () {
  console.log('Server started on port 3000');
});
