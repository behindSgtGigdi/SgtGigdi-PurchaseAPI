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
    console.log(ret);
    });
  });
});

req.write(JSON.stringify({
  password: xsollapassword,
  remember_me: true,
  username: xsollausername
}));
req.end();