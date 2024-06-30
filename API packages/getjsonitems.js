const path = require('path')
const fs = require('fs')
//for this purpose the item will be code
var item = "code";
const filePath = path.resolve(__dirname, './items.json')
fs.readFile(filePath, (err, data) => {
  if(err){
    console.log("Admin Error! Purchase File Not Found!")
    console.log("purchase unsuccessful!")
      res.end(myJSON)
      return;
  } else {
    const obj = JSON.parse(data);
    var price = "obj" + "." + item;
    var purchaseamount = eval(price);
    console.log(purchaseamount);
  }
})