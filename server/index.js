const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const dirTree = require("directory-tree");

const eventPage = require("./lib/event-page-generator");
const constants = require("./constants/constants");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

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
    const type = req.params.type;

    if (!type) {
        res.send({
            err: "Please provide mock type"
        });
    } else {
        let response;

        switch (type) {
            case constants.MOCK_EVENT_PAGE: response = eventPage.generateEventPageMock(req.body);
                break;
            default:
                response = {
                    error: "Mock " + type + " not supported"
                };
        }

        res.send(response);
    }
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
