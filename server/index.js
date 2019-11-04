const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const dirTree = require("directory-tree");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// CHANGE/REMOVE THIS ROUTE
app.get("/", (req, res) => {
    const testResponse = {
        route: "root"
    };

    res.send(testResponse);
});

app.get("/supported-requests", (req, res) => {
    const tree = dirTree(path.join(__dirname + "/responses/"));

    res.send(tree);
});

app.get("/schemas-json/:folder?/:file?", (req, res) => {
    if (req.params.folder && req.params.file) {
        let response = {};

        try {
            rawData = fs.readFileSync(
                path.join(__dirname + "/responses/" + req.params.folder + "/schemas/" + req.params.file + ".json")
            );
            response = JSON.parse(rawData);
        } catch(e) {
            response.err = "Schema not found";
        } finally {
            res.send(response);
        }
    } else {
        res.send({
            err: "Please provide a valid url: /schemas-json/:folder/:file"
        });
    }
});

app.post("/mock-generator/:type", (req, res) => {
    if (!req.params.type) {
        res.send({
            err: "Please provide mock type"
        });
    } else {
        // switch () {
    
        // }
        res.send({
            sucess: "Generating mock of type " + req.params.type
        });
    }
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
