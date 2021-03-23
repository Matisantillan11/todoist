const fs = require("fs");

const archive = "./database/data.json";

const pushData = (data) => {
  fs.writeFileSync(archive, JSON.stringify(data));
};

const getData = () => {
  if (!fs.existsSync(archive)) {
    return null;
  }
  const data = fs.readFileSync(archive);
  return data;
};

module.exports = { pushData, getData };
