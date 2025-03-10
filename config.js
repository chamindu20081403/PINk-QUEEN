const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "G7YwFa7D#xA9rHOXUyBmKjlkSczEvxQ3Z3pFGIpOOgy1uLcsqGs8",
  MONGODB: process.env.MONGODB || "mongodb://mongo:gypcdIlYLLwTrZUhrdhhNLtAQkzVBOQh@switchback.proxy.rlwy.net:45570",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361"
};
