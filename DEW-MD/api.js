const fs = require("fs");
if (fs.existsSync("api.env")) require("dotenv").config({ path: ".api.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  BOT_URL: process.env.BOT_URL || "https://dew-md-data.vercel.app/DATA-BASE/Data-File.json"
};
