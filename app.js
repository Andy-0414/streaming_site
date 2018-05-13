var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(express.static('public'));
app.use(express.static('file'));

app.set('view engine', 'jade');
app.set('views', './views');

app.get(['/', '/:name', '/:name/:episode'], (req, res) => {
    var name = req.params.name;
    var episode = req.params.episode;
    fs.readdir('file/', (err, files) => {
        if (name) {
            fs.readdir('file/' + name, (err, fl) => {
                // var videos = file_list.map((value)=>{
                //     if(path.extname(value) == ".mp4")
                //     {
                //         return value;
                //     }
                // }).filter((n)=>{return n != undefined;});//videos
                // var subs = file_list.map((value) => {
                //     if (path.extname(value) == ".vtt") {
                //         return value;
                //     }
                // }).filter((n) => { return n != undefined; });//sub

                var videos = new Array([]);
                var subs = new Array([]);
                try {
                    // for (var i = 0; i < fl.length; i++) {
                    //     if (path.extname(fl[i]) == '.mp4') {
                    //         videos.push(fl[i]);
                    //     }
                    //     if (path.extname(fl[i]) == '.vtt') {
                    //         subs.push(fl[i]);
                    //     }
                    // }
                    fl.forEach((value) => {
                        if (path.extname(value) == '.mp4') {
                            videos.push(value);
                        }
                        if (path.extname(value) == '.vtt') {
                            subs.push(value);
                        }
                    });
                }
                catch (err) {
                }

                res.render('index', {
                    dir: '..',
                    list: files,
                    name: name,
                    file_list: videos,
                    episode: episode,
                    subs: subs
                });
            });
        }
        else {
            res.render('index', {
                dir: '.',
                list: files,
                name: 'Hello Sunrin',
                file_list: {},
                episode: 0,
                subs: {}
            });
        }
    });
});
app.listen(3000, () => {
    console.log('Server OPEN');
});