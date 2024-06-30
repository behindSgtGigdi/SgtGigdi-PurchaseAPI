var arguments = process.argv;
var facts = "false";
i = 0;
while(facts == "false")
{
if(arguments[i].includes("-next"))
{
  var Iuser = i++;
  var userID = arguments[i];
  var fs = require('fs');
  var facts = "true";
  const vrchat = require("vrchat");
const mySecret = process.env['vrchatpassword']
const mySecret2 = process.env['vrchatusername']
const ownerid = process.env['vrchatuserid']
const configuration = new vrchat.Configuration({
    username: mySecret2,
    password: mySecret
});
// Init check...
const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const NotificationsApi = new vrchat.NotificationsApi(configuration);
const InviteApi = new vrchat.InviteApi(configuration);
const UsersApi = new vrchat.UsersApi(configuration);
const FriendApi = new vrchat.FriendsApi(configuration);
    AuthenticationApi.getCurrentUser().then(resp => {
    // logged in as the inviter
});
if (userID == ownerid)
{
  console.log("Success");
  return;
}
setTimeout(function() {
FriendApi.getFriendStatus(userID).then(resp => {
  if (resp.data.isFriend == false)
  {
  if (resp.data.incomingRequest == false)
  {
    console.log("Failed");
    return;
  }
    console.log("Success");
    return;
  }
  console.log("Success");
})
}, 2000);
}else{
  i++
}}