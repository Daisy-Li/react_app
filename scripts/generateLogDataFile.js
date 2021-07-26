/**
 * create by wangkang12 on 2020/12/22
 * description： 用于生成埋点配置文件
 */
const xlsx = require("node-xlsx").default;
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const log = console.log;
const outPutInfo = (msg) => log(chalk.blue.bgGray.bold(msg));

const PV_SHEET_NAME = "PV";
const CLICK_SHEET_NAME = "点击";

let file = "";

const template = (NAME) => `export const ${NAME} = \"${NAME}\";\n`;

const annotateTemplate = (ANNOTATE) => `\/\/ ${ANNOTATE}\n`;

const sheets = xlsx.parse(
  path.join(__dirname, "../src/utils/logData/logExpo.xlsx")
);

sheets.forEach((sheet) => {
  if (sheet.name === PV_SHEET_NAME) {
    const pvData = sheet.data;
    // 页面名称索引
    const pageIndex = pvData[1].indexOf("page");
    // 页面id索引
    const pageIdIndex = pvData[1].indexOf("page_id");

    pvData.slice(2).forEach((row) => {
      file +=
        annotateTemplate(row[pageIndex] + " - PV") + template(row[pageIdIndex]);
    });
  }

  if (sheet.name === CLICK_SHEET_NAME) {
    const clickData = sheet.data;
    // 事件名称索引
    const eventNameIndex = clickData[1].indexOf("event_name");
    // 页面名称索引
    const pageIndex = clickData[1].indexOf("page");
    // 事件id索引
    const eventIdIndex = clickData[1].indexOf("event_id");

    clickData.slice(2).forEach((row) => {
      file +=
        annotateTemplate(`${row[pageIndex]} - ${row[eventNameIndex]}`) +
        template(row[eventIdIndex]);
    });
  }
});

fs.writeFile(
  path.join(__dirname, "../src/utils/logData/logExpo.ts"),
  file,
  () => {
    outPutInfo("文件创建成功");
  }
);
