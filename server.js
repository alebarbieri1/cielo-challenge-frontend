var express = require('express');
var app = express();

app.use(express.static('./dist/cielo-challenge-app'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/cielo-challenge-app/' }
    );
});

app.listen(process.env.PORT || 8080);