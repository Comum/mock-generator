const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const path = require("path");
const dirTree = require("directory-tree");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// CHANGE/REMOVE THIS ROUTE
app.get("/", (req, res) => {
    const testResponse = {
        hello: 'world'
    };

    res.send(testResponse);
});

app.get("/supported-requests", (req, res) => {
    const tree = dirTree(path.join(__dirname + "/responses/"));

    res.send(tree);
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
