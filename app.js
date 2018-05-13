var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(express.static('file'));

app.set('view engine', 'jade');
app.set('views', './views');

app.get(['/', '/:name'], (req, res) => {
    var name = req.params.name;
    fs.readdir('file/', (err, files) => {
        if (name) {
            res.render('index', {
                dir: '..',
                list: files,
                name: name
            });
        }
        else {
            res.render('index', {
                dir: '',
                list: files,
                name: 'Hello Sunrin'
            });
        }
    });
})
app.listen(3000, () => {
    console.log('Server OPEN');
})