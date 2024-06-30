var http = require("https");
var userid = "1bc4e1a6-7528-4756-a0f7-142441cdd405"
var admintoken = "eyJhbGciOiJSUzI1NiIsImtpZCI6InNnRnk0NjRrVk5YVFo2YmVYM0tFT2kyam1yWnA4bUQiLCJ0eXAiOiJKV1QifQ.eyJlbWFpbCI6ImZvcnRuaXRldGltZW1hY2hpbmVAZ21haWwuY29tIiwiZXhwIjoxNjQyNTUwNDE1LCJncm91cHMiOltdLCJpYXQiOjE2NDE2ODY0MTUsImlzX21hc3RlciI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9sb2dpbi54c29sbGEuY29tIiwicGFydG5lcl9kYXRhIjp7ImFkbWluIjpmYWxzZSwibWVyY2hhbnRzIjpbeyJpZCI6MTU2NDY2LCJyb2xlIjoiUk9MRV9PV05FUiJ9LHsiaWQiOjE0NDg5NSwicm9sZSI6IlJPTEVfT1dORVIifSx7ImlkIjoxNzM4NzQsInJvbGUiOiJST0xFX09XTkVSIn1dfSwicGF5bG9hZCI6IntcImZpbHRlcnNcIjpudWxsfSIsInByb21vX2VtYWlsX2FncmVlbWVudCI6dHJ1ZSwicmVkaXJlY3RfdXJsIjoiaHR0cHM6Ly9wdWJsaXNoZXIueHNvbGxhLmNvbS8iLCJzdWIiOiJmNGUzNzczMy0zYTUzLTQ4ZWMtYmE0Ny1mYjE3ZWFhYTUwMGMiLCJ0eXBlIjoic29jaWFsIiwidXNlcm5hbWUiOiJmb3J0bml0ZXRpbWVtYWNoaW5lQGdtYWlsLmNvbSIsInhzb2xsYV9sb2dpbl9hY2Nlc3Nfa2V5IjoiU21Ibm9tSzFwNnp1b2lYdVd6VFF5dXJHdnd5a2RhRzc2WlpkcFJPdzU1MCIsInhzb2xsYV9sb2dpbl9wcm9qZWN0X2lkIjoiNDBkYjJlYTQtNWQ0Mi0xMWU2LWEzZmYtMDA1MDU2YTBlMDRhIn0.N8f5imoZouufhpR1Nd6FRppdTARce-iEqArk1iGsh8M8udkkxuaFOFATm0Vrx5TGAqn4K4_E4omiDg4LkEDMP5mCdPablaziO_dK8qNeD2S8Zsveaw7bEauMpn_rkXNt6KYgK0JFJMjdkcTIkQX_q7hmwaOgcgakmMVEc6ZxdCJ5jmBtd3ym4ImGJ3jFqU3D7XZg5H4rO1P5j2yZ4r4ncmMt1JBXGkvT7w-G5bGv1RnybCCW6yAe8VOcolsyS4wZ8rqdT3h7TZ4nZuv60pBqMtgK6iDLkdPeP3le3AFJywb1TGrZrwyvOwcPYiPuPMk0FkX3KnVNyRzlChb6xF_IQw"
var options = {
  "method": "POST",
  "hostname": "login.xsolla.com",
  "port": null,
  "path": "/api/attributes/users/" + userid + "/get_read_only",
  "headers": {
    "content-type": "application/json",
    "X-SERVER-AUTHORIZATION": admintoken
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
  publisher_id: 156466,
}));
req.end();