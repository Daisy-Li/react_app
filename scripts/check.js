const fs = require("fs");
const glob = require("glob");
const chalk = require("chalk");
const log = console.log;

const outPutInfo = (msg) => log(chalk.blue.bgGray.bold(msg));
const outPutErr = (msg) => log(chalk.red.bgGray.bold(msg));

/**
 * 检测是否包含预发接口
 */
glob("build/**", { nodir: true }, function (err, files) {
  files
    .filter((file) => /js$/.test(file))
    .forEach((file) => {
      // 判断文件名是否包含hash值
      if (!/\.[a-z0-9]{8}\./.test(file)) {
        outPutInfo("未包含hash值，请使用build命令重新构建");
        process.exit(1);
      }
      // 判断是否包含预发接口
      let content = fs.readFileSync(file);
      if (content.indexOf("beta-api") !== -1) {
        outPutErr("包含预发接口！");
        process.exit(1);
      }
    });
});
