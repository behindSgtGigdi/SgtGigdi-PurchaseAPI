var sleep = require('system-sleep');
sleep(2000);
var arguments = process.argv;
var facts = "false";
i = 0;
while(facts == "false")
{
if(arguments[i].includes("-next"))
{
  var Iworld = i++;
  var worldID2 = arguments[i];
  var fs = require('fs');
  const worldID = fs.readFileSync(worldID2,'utf8');
  fs.unlinkSync(worldID2);
  var Iuser = i++;
  var userID2 = arguments[i];
  const userID = fs.readFileSync(userID2,'utf8');
  fs.unlinkSync(userID2);
  var facts = "true";
  const vrchat = require("vrchat");
const mySecret = process.env['vrchatpassword']
const mySecret2 = process.env['vrchatusername']
const ownerid = process.env['vrchatuserid']
const configuration = new vrchat.Configuration({
    username: mySecret2,
    password: mySecret
});
console.log("Initiating invite...");
const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const NotificationsApi = new vrchat.NotificationsApi(configuration);
const InviteApi = new vrchat.InviteApi(configuration);
const UsersApi = new vrchat.UsersApi(configuration);
    AuthenticationApi.getCurrentUser().then(resp => {
        console.log("Logged in as: " + resp.data.displayName);
});
setTimeout(function() {
NotificationsApi.getNotifications({ type: "friendRequest", hidden: "false" }).then(resp => {
var facts = "false";
var i =0;
while(facts == "false")
{
try {
  var ID = resp.data[i].id;
  NotificationsApi.acceptFriendRequest(ID).then(console.log("ADDED!"));
}
catch (e) {
  console.log("Done Adding " + i + " People!");
  var facts ="true";
setTimeout(function() {
sleep(4000);
  // below should just be the variable that gets sent
console.log(userID);
UsersApi.getUser(userID).then(resp => {
var friend = resp.data.isFriend;
console.log(friend);
if(friend == true)  //notice the ==
{
  // Continue 
  var world = worldID;
  setTimeout(function() {
  setTimeout(function() {
InviteApi.inviteUser(userID, { instanceId: world, messageSlot: 0 }).then();
}, 30000);
    console.log("Invited User.");
    console.log("Invite Complete!");
}, 8000);
}else{
if (userID == ownerid)
{
  console.log("Can Not Invite Owner To World For Security.");
  console.log("Invite Failed!");
  return;
}
  console.log("User Has Not Added You As A Friend!");
  console.log("Invite Failed!");
  return;
}
}, 5000);
});
}
  i++;
}
});
}, 3000);
}
else
{
  i++
}
}