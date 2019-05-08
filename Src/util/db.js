const monk = require("monk");
const url = '127.0.0.1:27017/userinfo';
const DB= monk(url)
exports.db = DB

// exports.GetAll=function(collectionName,json,callback) {
//   const context=DB.get(collectionName)
//   await context.find(json,function(err,result){
//     callback(err,result);
//   })
// }