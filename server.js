const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const spawn = require("cross-spawn");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./dist"));

app.post("/download", (req, res) => {
  var role = req.body.role;
  var taskGroups = req.body.taskGroups;
  req.body.company = "Contoso";
  console.log("Role = " + role);
  console.log("taskGroups = " + JSON.stringify(taskGroups));
  try {
    fs.writeFileSync("./template/site.json", JSON.stringify(req.body));
    createSite();
    res.end("Site created");
  } catch (err) {
    console.error(err);
    res.error("Error when creating file");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./dist/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

function createSite() {
  try {
    process.chdir("./template");
    console.log("New directory: " + process.cwd());
    //TODO: Change copy to something else if on Linux.
    const child = spawn("npm run generate && copy site.json ./dist/site.json");

    child.stdout.on("data", data => {
      console.log(`child stdout:\n${data}`);
    });

    child.stderr.on("data", data => {
      console.log(`child stderr:\n${data}`);
    });
  } catch (err) {
    console.log("chdir: " + err);
  }
}
