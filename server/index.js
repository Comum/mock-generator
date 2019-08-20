const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
    const testResponse = {
        hello: 'world'
    };
    const stringifiedObj = JSON.stringify(testResponse);
    const parsedObj = JSON.parse(stringifiedObj);

    res.send(testResponse);
});

app.listen(8000, () => {
    console.log("Example app listening on port 8000!");
});
