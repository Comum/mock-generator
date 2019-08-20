const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const { fetchDirectories, getLastFolder, getAllSchemasInFolders } = require("./lib/utils/file-utils");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
    const testResponse = {
        hello: 'world'
    };

    res.send(testResponse);
});
app.get("/supported-requests", (req, res) => {
    const fullDirectories = fetchDirectories(path.join(__dirname + "/responses/"));
    const folders = getLastFolder(fullDirectories);

    getAllSchemasInFolders(folders)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.send({ error: true });
        });
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
