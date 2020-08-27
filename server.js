const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const spawn = require("cross-spawn-promise");
const zip = require("express-easy-zip");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

app.use(zip());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./dist"));

app.post("/download", (req, res) => {
  try {
    fs.writeFileSync("./template/site.json", JSON.stringify(req.body));
    createSite().then(state => {
      console.log("website created " + state);

      res.zip({
        files: [
          { path: path.join(__dirname, "./template/dist/"), name: "site" } //or a folder
        ],
        filename: "site.zip"
      });
    });
  } catch (err) {
    console.error(err);
    res.error("Error when creating file");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./dist/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

async function createSite() {
  try {
    process.chdir("./template");
    // var archive = archiver.create("zip", {});
    // var output = fs.createWriteStream(__dirname + "/site.zip");
    console.log("New directory: " + process.cwd());
    //TODO: Change copy to something else if on Linux.
    return spawn("npm", ["run", "build"])
      .then(stdout => {
        console.info("Successful site build!");
        console.info("stdout:", stdout.toString());
        return spawn("npm", ["run", "generate"])
          .then(stdout => {
            console.info("Success!");
            console.info("stdout:", stdout.toString());
            // copy site.json ./dist/site.json
            return spawn("copy", ["site.json", "./dist/site.json"])
              .then(stdout => {
                console.info("Success!");
                console.info("stdout:", stdout.toString());
                return true;
              })
              .catch(error => {
                console.error("Failed!");
                console.error("exit status:", error.exitStatus);
                console.error("stderr:", error.stderr.toString());
                return false;
              });
          })
          .catch(error => {
            console.error("Failed!");
            console.error("exit status:", error.exitStatus);
            console.error("stderr:", error.stderr.toString());
            return false;
          });
      })
      .catch(error => {
        console.error("Failed!");
        console.error("exit status:", error.exitStatus);
        console.error("stderr:", error.stderr.toString());
        return false;
      });
  } catch (err) {
    console.log("chdir: " + err);
  }
}
