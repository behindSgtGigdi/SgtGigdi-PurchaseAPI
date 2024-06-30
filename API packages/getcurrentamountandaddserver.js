var http = require("https");
var user_id = "1bc4e1a6-7528-4756-a0f7-142441cdd405"
var http = require("https");
const fs = require('fs')
const url = require('url');
var xsollapassword="4AUmaaid";
var xsollausername="fortnitetimemachine@gmail.com";
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
    var body = Buffer.concat(chunks);
    var test4343 = (body.toString());
    var jsonData = test4343;
    var jsonParsed = JSON.parse(jsonData);
    var stuf3f = jsonParsed.login_url;
    var request = require('request');
    var url = stuf3f;
        request({ url: url, followRedirect: false }, function (err, res, body) {
      var location = res.headers.location;
      var ret = location.replace('https://publisher.xsolla.com/?token=','');
    var options = {
  "method": "POST",
  "hostname": "login.xsolla.com",
  "port": null,
  "path": "/api/attributes/users/" + user_id + "/get_read_only",
  "headers": {
    "content-type": "application/json",
    "X-SERVER-AUTHORIZATION": ret
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
    var gay = jsonParsed[0].value;
var currentamount = parseInt(gay);
console.log(currentamount);
var purchaseamount = 1;
var purchaseamount = parseInt(purchaseamount);
console.log(purchaseamount);
var result2 = currentamount + purchaseamount;
var result = result2.toString()
console.log(result);
var http = require("https");
const fs = require('fs')
const url = require('url');
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
      console.log("Successful!");
  });
});
req.write(JSON.stringify({
    attributes: [{key: 'GigdiBucks', permission: 'private', value: result}],
    publisher_id: 156466,
    publisher_project_id: 80382,
    removing_keys: []
}));
req.end();
  });
});

req.write(JSON.stringify({
  keys: ['GigdiBucks'],
  publisher_project_id: 80382,
  publisher_id: 156466,
}));
req.end();
    });
  });
});

req.write(JSON.stringify({
  password: xsollapassword,
  remember_me: true,
  username: xsollausername
}));
req.end();