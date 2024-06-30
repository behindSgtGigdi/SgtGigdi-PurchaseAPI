// get VRCHAT player count and convert it to JSON
const vrchat = require("vrchat");
const configuration = new vrchat.Configuration({});
const SystemAPI = new vrchat.SystemApi(configuration);
SystemAPI.getCurrentOnlineUsers().then(resp => {
var number = resp.data.toString();
var vrchatjson = {
  "VRCHATonline": number
};
var result = JSON.stringify(vrchatjson);
console.log(result);
});