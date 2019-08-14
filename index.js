const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const { fetchDirectories, getLastFolder, getAllSchemasInFolders } = require('./src/library/utils/file-utils');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.post('/form-response', (req, res) => {
    res.send(`test: ${req.body.test}`);
});

app.get('/schemas', (req, res) => {
    const fullDirectories = fetchDirectories(path.join(__dirname + '/src/responses/'));
    const folders = getLastFolder(fullDirectories);

    getAllSchemasInFolders(folders).then((response) => {
        res.render('pages/schemas', { structure: response }, (err, html) => {
            if (err) {
                res.render('pages/notFound', { err });
            } else {
                res.send(html);
            }
        });
    });
});

app.get('/schemas-json/:folder/:file', function(req, res) {
    if (req.params.folder && req.params.file) {
        rawData = fs.readFileSync(path.join(__dirname + '/src/responses/' + req.params.folder + '/schemas/' + req.params.file + '.json'));
        parsedData = JSON.parse(rawData);
        res.send(parsedData);
    } else {
        res.render('pages/notFound', { err: 'File not found' });
    }
});

app.listen(8000, () => {
    console.log('Example app listening on port 8000!');
});
