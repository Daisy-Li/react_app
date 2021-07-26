const fs = require("fs");
const glob = require("glob");
const request = require("request");

require("dotenv").config();

const formData = {};

glob("build/**", { nodir: true }, function (err, files) {
  files.forEach((file) => {
    const fullPath = `/export/www/html${process.env.PUBLIC_URL.slice(
      1
    )}${file.replace(/^build/, "")}`;
    if (
      fullPath.search(/\.map$/i) < 0 &&
      fullPath.search(/\.LICENSE.txt$/i) < 0
    ) {
      formData[fullPath] = fs.createReadStream(file);
    }
  });

  request.post(
    {
      url: "http://upload.page.jd.com:80",
      formData: formData,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
