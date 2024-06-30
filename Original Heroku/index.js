//CODE IS VERY MESSED ATM
//shows needed strings and objects to begin
const http = require('http');
const fs = require('fs')
const url = require('url');
const obj = {status: "unsuccessful"};
const myJSON = JSON.stringify(obj);
const obj2 = {status: "successful!"};
const myJSON2 = JSON.stringify(obj2);
const url2 = "SgtGigdiLauncher";
const qs = "SgtGigdiLauncher";
const querystring = require('querystring');
console.log("The server is starting...");
//Finished doing that is now creating the server
var server = http.createServer(function (req, res) {
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var user_id = parseData2.userid;
if ( typeof user_id !== 'undefined' && user_id )
{
  
}
else
{
  res.end("please enter data before entering");
  return;
}
  const queryObject = url.parse(req.url,true).query;
  //grabs URL params and puts it into a json file
  const data = queryObject
  const dataJSON = JSON.stringify(data);
  const parseData = JSON.parse(dataJSON);
  var user_id = parseData.userid;
  var purchaseamount = parseData.purchaseamount;
  var currentamount = parseData.currentamount;
  var item = parseData.item;
  //puts URL params into vars
  console.log("The ID is " + user_id);
  console.log("The purchase is " + purchaseamount);
  console.log("The current amount is " + currentamount);
  console.log("The item is " + item);
  var totalleft = currentamount - purchaseamount;
  console.log("The total left is " + totalleft)
  if(totalleft == 0){ 
    //good
    var Good = "good";
  } else { 
    //go to next
  }
  if(totalleft > 0){ 
    //good
  } else { 
    if(Good === "good"){ 
      //good
    } else { 
      console.log("purchase unsuccessful!")
      res.end(myJSON)
      return;
    }
  }
  var fs = require('fs');
var http = require("https");
var EventEmitter = require("events").EventEmitter;
var body = new EventEmitter();
  var options = {
  "method": "POST",
  "hostname": "login.xsolla.com",
  "port": null,
  "path": "/api/login?with_logout=0&payload=%7B%22filters%22%3Anull%7D&login_url=https%3A%2F%2Fapi.xsolla.com%2Fmerchant%2Fxsolla_login%2Fsession&projectId=40db2ea4-5d42-11e6-a3ff-005056a0e04a",
  "headers": {
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    var test4343 = (body.toString());
    var jsonData = test4343;
    var jsonParsed = JSON.parse(jsonData);
    var gay = jsonParsed.login_url;
    var request = require('request');
    var url = gay;
    request({ url: url, followRedirect: false }, function (err, res, body) {
      var location = res.headers.location;
      var ret = location.replace('https://publisher.xsolla.com/?token=','');
      var options = {
      "method": "POST",
      "hostname": "login.xsolla.com",
      "port": null,
      "path": "/api/attributes/users/" + user_id + "/update_read_only",
      "headers": {
        "content-type": "application/json",
        "x-server-authorization": ret
      }
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
      });
    });
    var totalleft = currentamount - purchaseamount;
    totalleft = totalleft + ''
    req.write(JSON.stringify({
      attributes: [{key: 'GigdiBucks', permission: 'private', value: totalleft}],
      publisher_id: 156466,
      publisher_project_id: 80382,
      removing_keys: ['GigdiBucks']
    }));
    req.end();
  });
});
    });

req.write(JSON.stringify({
  password: '4AUmaaid',
  remember_me: true,
  username: 'fortnitetimemachine@gmail.com'
}));
req.end();
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(myJSON2);
  const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/914302880234745857/c-sViR36fK6RbHwwDnGIUP-pwtlxINJOFRPZypffsNdx8_SVzG9rmAO0tE6CJGp6oDe6");
 
const IMAGE_URL = 'https://cdn.discordapp.com/attachments/854486942590566470/919792457074475058/unnamed.jpg';
hook.setUsername('SgtGigdi Purchase Logs');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
hook.send("A new purchase has been made through the account: " + user_id + ". -  INFO ABOUT THE PURCHASE: Purchase Date: " + date_time + " Item Purchased: " + item + ", The purchase amount is " + purchaseamount + ", The current amount was " + currentamount + ", and amount left is " + totalleft + ". That is all for now.");
console.log("Webhook info sent!");
console.log("A new purchase has been made through the account: " + user_id + ". -  INFO ABOUT THE PURCHASE: Purchase Date: " + date_time + " Item Purchased: " + item + ", The purchase amount is " + purchaseamount + ", The current amount was " + currentamount + ", and amount left is " + totalleft + ". That is all for now.");
});
server.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log("Server is running.");
});