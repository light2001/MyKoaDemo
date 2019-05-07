const monk = require("monk");
const url = '127.0.0.1:27017/userinfo';
exports.db = monk(url);