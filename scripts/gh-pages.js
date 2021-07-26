const ghpages = require("gh-pages");
const date = new Date();
const message = `Auto-deploy-${
  date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
}${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
const branch = `master`;
ghpages.publish(
  "build",
  {
    branch: branch,
    dest: "build",
    message: message,
  },
  function (err) {
    if (!err) {
      console.log("Published success!");
    } else {
      console.log(err);
    }
  }
);
