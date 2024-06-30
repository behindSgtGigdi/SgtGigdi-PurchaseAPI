var http = require("https");

var options = {
  "method": "POST",
  "hostname": "login.xsolla.com",
  "port": null,
  "path": "/api/attributes/users/me/get_read_only",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer " + token
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
    console.log(gay)
  });
});

req.write(JSON.stringify({
  keys: ['GigdiBucks'],
  publisher_project_id: 80382,
  user_id: '1bc4e1a6-7528-4756-a0f7-142441cdd405'
}));
req.end();