const ghpages = require("gh-pages");
const date = new Date();
// const branch = `build-${(date.getMonth()+1)<10?'0'+(date.getMonth()+1):(date.getMonth()+1)}${date.getDate()}${date.getHours()}${date.getMinutes()}`;
const branch = "yufa";
ghpages.publish(
  "build",
  {
    branch: branch,
    dest: "build",
    message: `build:yufa-${date}`,
  },
  function (err) {
    if (!err) {
      console.log("Published success!");
    } else {
      console.log(err);
    }
  }
);
