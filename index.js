// CODE IS VERY MESSED ATM
// shows needed strings and objects to begin
console.log("Loading variables...");
// load variables headers
// load main variables
const http = require('http');
const https = require('https');
const rateLimit = require("http-ratelimit");
const ratelimit = process.env.ratelimit
const ratelimitrequest = process.env.ratelimitrequest
const ratelimittime = process.env.ratelimittime
// load passwords and webhooks
const gmailemail = process.env.gmailemail
const gmailpass = process.env.gmailpass
const vrchatapi = process.env.vrchatapi
const justtoletyouknowwebhookurl = process.env.justtoletyouknowwebhookurl
const giftcardticketwebhookurl = process.env.giftcardticketwebhookurl
const purchasebotwebhookurl = process.env.purchasebotwebhookurl
const loginwebhookurl = process.env.loginwebhookurl
const webhookpicture = process.env.webhookpicture
const vrchatinvite = process.env.vrchatinvite
const xsollapassword = process.env.xsollapassword
const xsollausername = process.env.xsollausername
const vrchatworldid = process.env.vrchatworldid
const vrchatuserid = process.env.vrchatuserid
const giftcardtickethandlerurl = process.env.giftcardtickethandlerurl
const giftcardsecret = process.env.giftcardsecret
// load required
const fs = require('fs')
const url = require('url');
const databaseurl = process.env.vrchatdatabase
const user_id = "";
const obj = {status: "unsuccessful"};
const myJSON = JSON.stringify(obj);
const obj4 = {status: "Purchase Created Awaiting Review!"};
const status4 = JSON.stringify(obj4);
const obj2 = {status: "successful!"};
const myJSON2 = JSON.stringify(obj2);
const logingood = {status: "login successful!"};
const loginsuccessful = JSON.stringify(logingood);
const url2 = "SgtGigdiLauncher";
const qs = "SgtGigdiLauncher";
// e-mail send variables
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const today = new Date();
const year = today.getFullYear()
var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: gmailemail,
    pass: gmailpass
  }
}));
const querystring = require('querystring');
console.log("Variables Loaded!");
console.log("The server is starting...");
// Finished doing that is now creating the server
var server = http.createServer(function (req, res) {
    rateLimit.inboundRequest(req);
if(ratelimit == "true"){ 
var ratelimitrequestnumber2 = ratelimitrequest
var ratelimitrequestnumber = parseInt(ratelimitrequestnumber2);
} else { 
var ratelimitrequestnumber = 10000000;
}
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;

    if(rateLimit.isRateLimited(req, ratelimitrequestnumber) === true) {
        res.writeHead(429, {"Content-Type": "text/plain; utf-8"});
        res.end("Too many requests - Please Wait.");
    }
    else {
        // the requester has sent less than 20 requests in the defined timeframe (two minutes in this example)
        // do your normal stuff here
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var token = parseData2.token;
var item = parseData2.item;
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
// Below handles requests
// post requests
// post requests go first because they are priority.
// handles XSOLLA login requests
if (req.method === 'POST') {
    // Handle post info...
    if (req.url === '/sgtgigdilauncher-login') {
let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
console.log("SgtGigdi-Launcher LOGIN DETECTED!");
console.log("Initiating login log...");
var test = JSON.parse(body);
// Starts setting login information
var event_type = test.event_type;
var event_time = test.event_time;
var project_id = test.project_id;
var loginemail = test.data.authorization_fields.login;
var geo_user_ip = test.data.geo_user_ip;
var login_type = test.data.login_type;
var publisher_id = test.data.publisher_id;
var user_id = test.data.user_id;
// Set login information done.
console.log("Login information grabbed sending...");
// sends webhook
// sets variables
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(loginwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('SgtGigdi Login Logs');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Login webhook info was not sent because it is disabled! to enable this change webhook env to true");
    console.log("Sending Login info here because Login info was not sent to discord server.");
    console.log("A user has successfully logged into SgtGigdisLauncher using a username and password on an account. Account INFO: Account ID: " + user_id + " Account email or username: " + loginemail + ". User Info: " + " User IP: " + geo_user_ip + ". General Info: " + "Time of login: " + event_time + " Project ID: " + project_id + " Publisher ID: " + publisher_id + ". This login has been confirmed for SgtGigdiLauncher.");
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
hook.send("A user has successfully logged into SgtGigdisLauncher using a username and password on an account. Account INFO: Account ID: " + user_id + " Account email or username: " + loginemail + ". User Info: " + " User IP: " + geo_user_ip + ". General Info: " + "Time of login: " + event_time + " Project ID: " + project_id + " Publisher ID: " + publisher_id + ". This login has been confirmed for SgtGigdiLauncher.");
// webhook info sent!
console.log("Webhook info sent!");
// Logs purchase
console.log("A new login has been confirmed check the discord server for more information.");
  } else { 
    // Webhook env was set to an unknown value
    console.log("Login webhook info was not sent because the webhook env was set to an unknown value! to enable this change webhook env to true");
    console.log("Sending Login info here because Login info was not sent to discord server.");
    console.log("A user has successfully logged into SgtGigdisLauncher using a username and password on an account. Account INFO: Account ID: " + user_id + " Account email or username: " + loginemail + ". User Info: " + " User IP: " + geo_user_ip + ". General Info: " + "Time of login: " + event_time + " Project ID: " + project_id + " Publisher ID: " + publisher_id + ". This login has been confirmed for SgtGigdiLauncher.");
  }}
// Login webhook info has been sent!
  if(process.env.email == "false"){ 
    // Email env was set to an false so e-mail will not be sent
    console.log('E-mail Info - Login e-mail was not sent for user: ' + user_id  + '. For the reason "Email ENV set to false" to change this change the email env to "true"');
  } else { 
    //go to next
  if(process.env.email == "true"){ 
// Email env was set to true so they will be sent after purchases
// set template
var fs = require('fs');
var content = fs.readFileSync('email/logintemplate.html','utf8');
// replaces template variables
let result = content.replace("{{email}}", loginemail);
let result2 = result.replace("{{email}}", loginemail);
let result3 = result2.replace("{{clientip}", geo_user_ip);
let result4 = result3.replace("{{email}}", loginemail);
let result5 = result4.replace("{{email}}", loginemail);
let result6 = result5.replace("{{year}}", year);
var finalresult = result6;
// Adds mail options
var mailOptions = {
  from: 'sgtgigdilauncher@gmail.com',
  to: loginemail,
  bcc: "SgtGigdi@gmail.com",
  subject: 'SgtGigdiLauncher - Login-Successful!',
  html: finalresult
};
// variables set ready to send email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Login E-mail sent: unsuccessful! - reason ' + error);
  } else {
    console.log('Login E-mail sent: Successful!');
  }
});
// email info sent!
  } else { 
    // Email env was set to an unknown value so it will not be sent
    console.log('E-mail Info - Login e-mail was not sent for user: ' + user_id  + '. For the reason "Email ENV set to UNKNOWN value" to change this change the email env to "true"');
  }}
        // Finished everything important goes to function that gives user the status below
        goodlogin(geo_user_ip);
        return;
    });
    return;
    }}
// end of post reqeusts
// get requests
    if (req.url === '/') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested HomePage on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('html-pages/index.html').pipe(res)
        res.end
        return;
    }
if (req.url === '/css/style.css') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested CSS file on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/css' })
        fs.createReadStream('html-pages/css/style.css').pipe(res)
        res.end
        return;
    }
if (req.url === '/favicon.ico') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested Favicon on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'image' })
        fs.createReadStream('html-pages/favicon').pipe(res)
        res.end
        return;
    }
// homepage for this api
// VRCHAT PULLER API
if (req.url === '/vrchat/api/v1/currentusers') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested currentusers on IP: " + ip);
        const fs = require('fs');
        // this process adds a significant delay to the request but it must be put in place in order for the other part of the api to work.
  if(vrchatapi == "true"){ 
        var util = require('util'),
            exec = require('child_process').exec,
            child;

        child = exec('node api-src/vrchatapi/getplayercount.js', // command line argument directly in string
          function (error, stdout, stderr) {      // one easy function to capture data/errors
            var jsonnumber = stdout;
            console.log("Successfully Retrieved Player Count!");
            res.statusCode = 200;
            res.end(jsonnumber);
        });
  } else {
var vrchatjson = {
  "VRCHATonline": "unavailable"
};
var jsonnumber = JSON.stringify(vrchatjson);
console.log("Unsuccessfully Retrieved Player Count Due To ENV Being False!");
res.statusCode = 403;
res.end(jsonnumber);
  }
return;
    }
if (req.url === '/vrchat/api/v1/css/style.css') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested CSS file on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/css' })
        fs.createReadStream('html-pages/css/style.css').pipe(res)
        res.end
        return;
    }
var str12 = req.url;
var str_pos24 = str12.indexOf("/vrchat/api/v1/ippuller/start");
if (str_pos24 > -1) {
if(vrchatapi == "true"){
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
const inviteway = parseData2.way;
const userid = parseData2.user;
if(inviteway == null){
var vrchatjson = {
  "status": "failed",
  "reason": "invite way wasn't given"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
return;
}
if(inviteway == "invite"){
if(vrchatinvite == "false"){
var vrchatjson = {
  "status": "failed",
  "reason": "invites have been disabled"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
return;
}}
if(userid == null){
var vrchatjson = {
  "status": "failed",
  "reason": "user ID wasn't given"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
return;
}
var test = "true";
if(test == "true"){
// below not only checks if the user is real but it checks if they have user added
var util = require('util'),
return;
exec = require('child_process').exec,
child;
child = exec('node api-src/vrchatapi/checkuser.js -next ' + userid, // command line argument directly in string
function (error, stdout) {      // one easy function to capture data/errors
var result = stdout;
console.log(result);
if (result.includes("Failed"))
{
var vrchatjson = {
  "status": "failed",
  "reason": "user ID is invalid"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
console.log("Pulling request start failed as user doesn't exist.")
return;
}else{
// start?way=invite&user=dsafdsafsafs
const crypto = require('crypto');
var sleep = require('system-sleep');
var URL1 = "https://vrchat.com/home/launch?worldId=" + vrchatworldid + "&instanceId="
// Create a function for reusable perpose
const generateRandomString = (myLength) => {
  const chars =
    "1234567890";
  const randomArray = Array.from(
    { length: myLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = randomArray.join("");
  return randomString;
};

// Invite Variables
var instanceidnumber = generateRandomString(5);
var nonce = crypto.randomUUID();
var instanceID = instanceidnumber + "~hidden(" + vrchatuserid + ")~region(use)~nonce(" + nonce + ")";
var URL2 = URL1 + instanceID;
const fs = require('fs')

const folderName = instanceidnumber;

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
  setTimeout(function() {
var vrchatjson = {
"active": true,
"instanceid": "pullerinstanceID",
"pulleduser1": {
"displayname": "*displayname1*",
"userID": "*userID1*",
"platform": "*platform1*",
"currentAvatarImageUrl": "*imageurl1*",
"userIP": "hiddenbydefault",
},
"pulleduser2": {
"displayname": "*displayname2*",
"userID": "*userID2*",
"platform": "*platform2*",
"currentAvatarImageUrl": "*imageurl2*",
"userIP": "*pulleduser2ip*",
},
"worldID": vrchatworldid,
"pulledby": "SgtGigdiPuller"
};
var jsondata = JSON.stringify(vrchatjson);
fs.appendFile('' + folderName + '/instanceinfo', jsondata, function (err) {
  if (err) throw err;
  console.log('Instance info has been created!');
});
}, 1000);
const vrchat = require("vrchat");
const mySecret = process.env['vrchatpassword']
const mySecret2 = process.env['vrchatusername']
const configuration = new vrchat.Configuration({
    username: mySecret2,
    password: mySecret
});
const AuthenticationApi = new vrchat.AuthenticationApi(configuration);
const UsersApi = new vrchat.UsersApi(configuration);
const SystemApi = new vrchat.SystemApi(configuration);
const InstancesApi = new vrchat.InstancesApi(configuration);
AuthenticationApi.getCurrentUser().then(resp => {
console.log(`Logged in as: ${resp.data.displayName}`);
});
var worldid = vrchatworldid + ":" + instanceID;
var filepath = "api-src/vrchatapi/" + instanceidnumber + "2";
var fileContent = worldid;
setTimeout(function() {
if(inviteway == "invite")
{
fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
});
var filepath2 = "api-src/vrchatapi/" + instanceidnumber + "1";
var fileContent2 = userid;
fs.writeFile(filepath2, fileContent2, (err) => {
    if (err) throw err;
});
var executecommand = "node api-src/vrchatapi/invite.js -next " + filepath + " " + filepath2
const { exec } = require("child_process");

exec(executecommand, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
var vrchatjson = {
  "active": "true",
  "worldurl": URL2,
  "instanceid": instanceidnumber,
  "timeavailable": "30",
  "pullurl": "https://sgtgigdilauncher-purchaseapisv.herokuapp.com/vrchat/api/v1/ippuller/pull?instance=" + instanceidnumber,
  "invite": "true"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 200;
res.end(json); 
}else{
var vrchatjson = {
  "active": "true",
  "worldurl": URL2,
  "instanceid": instanceidnumber,
  "timeavailable": "30",
  "pullurl": "https://sgtgigdilauncher-purchaseapisv.herokuapp.com/vrchat/api/v1/ippuller/pull?instance=" + instanceidnumber,
  "invite": "false"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 200;
res.end(json); 
}
var worldid = vrchatworldid;
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.active;
var result = result.toString();
if(result == 'true'){
  console.log('Player Has Joined!');
  var pullerdisplayname = resp.data.users[0].displayName;
  var pullerID = resp.data.users[0].id;
  var pullerplatform = resp.data.users[0].last_platform;
  var pullercurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
  // Send IP and ID to mongo DB server
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pullerplatform == 'standalonewindows'){
var pullerplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
if(pullerplatform == 'android'){
var pullerplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
console.log('Puller platform is not identified.');
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname1*", pullerdisplayname);
let result3 = result2.replace("*userID1*", pullerID);
let result4 = result3.replace("*platform1*", pullerplatform);
let result5 = result4.replace("*imageurl1*", pullercurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
//pulled user 1 information
// log information
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pullerID, ipaddress: ip };
  dbo.collection(pullerID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP logged.");
    db.close();
  });
});
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
setTimeout(function() {
InstancesApi.getInstance(worldid, instanceID).then(resp =>{
var result = resp.data.n_users;
var result = result.toString();
if(result == '2'){
console.log("Player 2 has joined")
var pulled = resp.data.users[0].id;
if(pulled == pullerID){
console.log("Player 1 on top");
var pulleddisplayname = resp.data.users[1].displayName;
var pulledID = resp.data.users[1].id;
var pulledplatform = resp.data.users[1].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[1].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}}else{
console.log("Player 2 on top");
var pulleddisplayname = resp.data.users[0].displayName;
var pulledID = resp.data.users[0].id;
var pulledplatform = resp.data.users[0].last_platform;
var pulledcurrentAvatarImageUrl = resp.data.users[0].currentAvatarImageUrl;
var content = fs.readFileSync(instanceidnumber + '/instanceinfo','utf8');
// replaces template variables
if(pulledplatform == 'standalonewindows'){
var pulledplatform = "WindowsOS";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}
if(pulledplatform == 'android'){
var pulledplatform = "Quest";
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}else{
let result = content.replace("pullerinstanceID", instanceidnumber);
let result2 = result.replace("*displayname2*", pulleddisplayname);
let result3 = result2.replace("*userID2*", pulledID);
let result4 = result3.replace("*platform2*", pulledplatform);
let result5 = result4.replace("*imageurl2*", pulledcurrentAvatarImageUrl);
var finalresult = result5;
  fs.writeFile(instanceidnumber + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}}
setTimeout(function() {
try {
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED.")
// delete folder and file
} catch (err) {
  console.log("Already Deleted!");
}
return;
}, 1800000);
}else{
console.log("player 2 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 2 did not join")
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}
})}, 60000);
}else{
console.log("player 1 has not joined");
fs.unlinkSync(instanceidnumber + '/instanceinfo');
fs.rmdirSync(instanceidnumber);
console.log("IP LOG CONCLUDED. - player 1 did not join");
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 6000);
}
})}, 60000);
}, 4000);
}})}
}else{
var vrchatjson = {
  "VRCHATippullstart": "unavailable"
};
var jsonnumber = JSON.stringify(vrchatjson);
console.log("Unsuccessfully Retrieved Request Due To ENV Being False!");
res.statusCode = 403;
res.end(jsonnumber);
}}
var str72 = req.url;
var str_pos2 = str72.indexOf("/vrchat/api/v1/ippuller/pull");
if (str_pos2 > -1) {
if(vrchatapi == "true"){ 
// Start process.
if (req.method == 'HEAD'){
// Get IP and log.
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
console.log("User is about to get pulled. - Logging IP");
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var instanceID = parseData2.instance;
const path = instanceID + "/instanceinfo";

fs.access(path, fs.F_OK, (err) => {
if (err) {
console.log("Instance Does not exist.")
var vrchatjson = {
  "Status": "Failed.",
  "Reason": "Instance Does Not Exist"
};
var jsondata = JSON.stringify(vrchatjson);
res.statusCode = 200;
res.end(jsondata);
return;
}
fs.readFile(instanceID + "/instanceinfo", function (err, data) {
if (err) throw err;
if(data.includes('*pulleduser2ip*')){
var content = fs.readFileSync(instanceID + '/instanceinfo','utf8');
let result = content.replace("*pulleduser2ip*", ip);
var finalresult = result;
  fs.writeFile(instanceID + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
// upload user ID and IP
fs.readFile(instanceID + '/instanceinfo', function(err, data) {
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const ippulled = JSON.parse(data);
      
var userip = ippulled.pulleduser2.userIP;
var pulledID = ippulled.pulleduser2.userID;
var MongoClient = require('mongodb').MongoClient;
setTimeout(function() {
fs.readFile(instanceID + '/instanceinfo', function(err, data) {
    // Check for errors
if (err) {
console.log("Users were pulled but didn't join the server. Pull will not happen.");
return;
}
   
    // Converting to JSON
    const ippulled = JSON.parse(data);
      
var userip = ippulled.pulleduser2.userIP;
var pulledID = ippulled.pulleduser2.userID;
if (pulledID === '*userID2*') {
console.log("User ID was not given. Pull will not happen.");    
}else{
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pulledID, ipaddress: userip };
  dbo.collection(pulledID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP 2 logged.");
    db.close();
  });
});
}})
}, 600000);
});
});
console.log("User has been pulled");
  }else{
  console.log("User already got pulled.");
  }
res.writeHead(200, {'Content-Type': 'video/mp4'});
let readStream = fs.createReadStream("api-src/vrchatapi/VideoSRC/video.mp4");
readStream.pipe(res);
return;
});
});
}else{
// Deny user of entry
const path = instanceID + "/instanceinfo";
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var instanceID = parseData2.instance;
fs.readFile(instanceID + "/instanceinfo", function (err, data) {
if (err) {
console.log("Instance Does not exist.")
var vrchatjson = {
  "Status": "Failed.",
  "Reason": "Instance Does Not Exist"
};
var jsondata = JSON.stringify(vrchatjson);
res.statusCode = 404;
res.end(jsondata);
return;
}
if(data.includes('*pulleduser2ip*')){
// nothing happens keeps going.
}else{
console.log("User already got pulled.");
res.writeHead(200, {'Content-Type': 'video/mp4'});
let readStream = fs.createReadStream("api-src/vrchatapi/VideoSRC/video.mp4");
readStream.pipe(res);
return;
}})
var cpu = "test";
var cpu = req.headers['user-agent']
if (typeof cpu === 'undefined') {
return;
} else {
var str_pos = cpu.indexOf("Android");
if(str_pos > -1){
// Get IP and log.
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
console.log("User is about to get pulled. - Logging IP");
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var instanceID = parseData2.instance;
const path = instanceID + "/instanceinfo";
fs.access(path, fs.F_OK, (err) => {
if (err) {
console.log("Instance Does not exist.")
var vrchatjson = {
  "Status": "Failed.",
  "Reason": "Instance Does Not Exist"
};
var jsondata = JSON.stringify(vrchatjson);
res.statusCode = 200;
res.end(jsondata);
return;
}
fs.readFile(instanceID + "/instanceinfo", function (err, data) {
if (err) throw err;
if(data.includes('*pulleduser2ip*')){
var content = fs.readFileSync(instanceID + '/instanceinfo','utf8');
let result = content.replace("*pulleduser2ip*", ip);
var finalresult = result;
  fs.writeFile(instanceID + '/instanceinfo', finalresult, 'utf8', function (err) {
     if (err) return console.log(err);
// upload user ID and IP
fs.readFile(instanceID + '/instanceinfo', function(err, data) {
    // Check for errors
    if (err) throw err;
   
    // Converting to JSON
    const ippulled = JSON.parse(data);
      
var userip = ippulled.pulleduser2.userIP;
var pulledID = ippulled.pulleduser2.userID;
var MongoClient = require('mongodb').MongoClient;
setTimeout(function() {
fs.readFile(instanceID + '/instanceinfo', function(err, data) {
    // Check for errors
if (err) {
console.log("Users were pulled but didn't join the server. Pull will not happen.");
return;
}
   
    // Converting to JSON
    const ippulled = JSON.parse(data);
      
var userip = ippulled.pulleduser2.userIP;
var pulledID = ippulled.pulleduser2.userID;
if (pulledID === '*userID2*') {
console.log("User ID was not given. Pull will not happen.");    
}else{
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(databaseurl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("VRCHATIPS");
  var myobj = { ID: pulledID, ipaddress: userip };
  dbo.collection(pulledID).insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("IP 2 logged.");
    db.close();
  });
});
}})
}, 600000);
});
});
console.log("User has been pulled");
res.writeHead(200, {'Content-Type': 'video/mp4'});
let readStream = fs.createReadStream("api-src/vrchatapi/VideoSRC/video.mp4");
readStream.pipe(res);
return;
  }else{
  console.log("User already got pulled.");
  res.writeHead(200, {'Content-Type': 'video/mp4'});
let readStream = fs.createReadStream("api-src/vrchatapi/VideoSRC/video.mp4");
readStream.pipe(res);
return;
  }
return;
});
});
}}
}}else{
var vrchatjson = {
  "VRCHATpull": "unavailable"
};
var jsonnumber = JSON.stringify(vrchatjson);
console.log("Unsuccessfully Retrieved Request Count Due To ENV Being False!");
res.statusCode = 403;
res.end(jsonnumber);
}}
var str72 = req.url;
var str_pos2 = str72.indexOf("/vrchat/api/v1/ippuller/grab");
if (str_pos2 > -1) {
if(vrchatapi == "true"){
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var instanceID = parseData2.instance;
var ip = req.headers['x-forwarded-for'] || 
req.connection.remoteAddress || 
req.socket.remoteAddress ||
req.connection.socket.remoteAddress;
if (fs.existsSync(instanceID + "/instanceinfo")) {
fs.readFile(instanceID + "/instanceinfo", 'utf8', function (err,data) {
var vrchatjson = data;
var jsondata = vrchatjson;
console.log("Grabbed Instance for ip: " + ip);
res.statusCode = 200;
res.end(jsondata);
});
return;
}else{
console.log("User tried to grab on ip: " + ip + ". But the instance does not exist.");
var vrchatjson = {
  "Status": "Failed.",
  "Reason": "Instance Does Not Exist"
};
var jsondata = JSON.stringify(vrchatjson);
res.statusCode = 404;
res.end(jsondata);
return;
}}else{
var vrchatjson = {
  "VRCHATgrab": "unavailable"
};
var jsonnumber = JSON.stringify(vrchatjson);
console.log("Unsuccessfully Retrieved Request Count Due To ENV Being False!");
res.statusCode = 403;
res.end(jsonnumber);
return;
}}
// Invite Request
if (req.url === '/vrchat/api/v1/ippuller/inviterequest') {
if(vrchatapi == "true"){
if(vrchatinvite == "false"){
var vrchatjson = {
  "status": "failed",
  "reason": "invites have been disabled"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
return;
}else{
// True
if(vrchatinvite == "true"){
var vrchatjson = {
  "status": "success",
  "reason": "invites are enabled."
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 200;
res.end(json);
return;
}}}else{
var vrchatjson = {
  "VRCHATinvite": "unavailable"
};
var json = JSON.stringify(vrchatjson);
res.statusCode = 403;
res.end(json);
return;
}}
// END OF VRCHAT PULLER API
// below is the payment good page which adds amount to account
// below is if no params are given
    if (req.url === '/addtoaccount/secret5125700321/confirm') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested purchase currency homepage on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('html-pages/index.html').pipe(res)
        res.end
        return;
    }
  // redirects css file to the new path
    if (req.url === '/addtoaccount/secret5125700321/css/style.css') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested CSS file on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/css' })
        fs.createReadStream('html-pages/css/style.css').pipe(res)
        res.end
        return;
    }
    if (req.url === '/kahootstatus') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested The Status Of Kahoot on IP: " + ip)
  if(process.env.kahootlocked == "false"){ 
        res.end("unlocked");
        return;
  } else {
if(process.env.kahootlocked == "true"){ 
        res.end("locked");
        return;
  } else { 
        res.end("locked");
        return;
  }
  }
    }
var str71 = req.url;
var str_pos = str71.indexOf("/kahootspammer");
if (str_pos > -1) {
  if(process.env.kahootlocked == "false"){ 
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var antibotmode = parseData2.antibot;
var pin = parseData2.gamepin;
var bots = parseData2.numberob;
var usercontrolled = parseData2.controlbots;
var bots2 = parseInt(bots);
console.log(bots2);
var bots = bots2/20;
var bots2 = bots.toString();
var bots = bots2;
console.log(bots);
const axios = require('axios')
axios.get("https://kahootbotspammer-servernumber-1.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-2.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-3.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-4.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-5.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-6.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-7.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-8.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-9.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-10.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-11.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-12.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-13.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-14.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-15.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-16.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-17.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-18.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-19.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-20.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-21.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-22.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-23.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-24.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-25.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-26.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-27.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-28.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-29.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-30.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-31.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-32.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-33.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-34.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-35.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-36.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-37.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-38.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-39.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-40.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-41.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-42.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-43.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-44.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-45.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-46.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-47.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-48.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-49.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
axios.get("https://kahootbotspammer-servernumber-50.sgtgigdi1.repl.co" + "/kahootspammer?antibot=" + antibotmode + "&gamepin=" + pin + "&numberob=" + bots + "&controlbots=" + usercontrolled);
console.log("done");
  } else {
if(process.env.kahootlocked == "true"){ 
        res.end("This endpoint is locked!");
        return;
  } else { 
        res.end("This endpoint is locked!");
        return;
  }
  }
}
var str70 = req.url;
var str_pos = str70.indexOf("/addtoaccount/secret5125700321/confirm");
if (str_pos > -1) {
var origin = req.headers.origin;
const queryObject2 = url.parse(req.url,true).query;
const data2 = queryObject2
const data2JSON = JSON.stringify(data2);
const parseData2 = JSON.parse(data2JSON);
var user_id = parseData2.userid;
var justdoit = "yea";
var amountnumber = parseData2.number;
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        if (justdoit === 'yea') {
        console.log("A user is making a startup to a payment using the ID: " + user_id);
        var amounttogive = findamount(amountnumber);
    if (amounttogive === 'undefined') {
        console.log("Payment unsuccessful! Purchase number does not exist!");
        return;
    }
        startpayment(amounttogive, user_id);
        // payment done
        // finish
        return;
        }
        else
        {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested purchasecurrency without correct origin on IP: " + ip)
        }
}
    if (req.url === '/purchaseusinggiftcard/api/v1') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested GiftCard on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('html-pages/index.html').pipe(res)
        res.end
        return;
    }
    // redirects css file to the new path
    if (req.url === '/purchaseusinggiftcard/api/css/style.css') {
        var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested CSS file on IP: " + ip)
        const fs = require('fs')
        res.writeHead(200, { 'content-type': 'text/css' })
        fs.createReadStream('html-pages/css/style.css').pipe(res)
        res.end
        return;
    }
// if contains helps with payload strings
var str9 = req.url;
var str_pos = str9.indexOf("/purchaseusinggiftcard/api/v1");
if (str_pos > -1) {
var ip = req.headers['x-forwarded-for'] || 
        // example = /purchaseusinggiftcard/api/v1?giftcardtype=*type of gift card must be 1 of 3 values to work steam,amazon,gamestop*&giftcardcode=*giftcardcode*&email=*User Email*&name=*User Name
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        console.log("User Requested GiftCard on IP: " + ip)
        const fs = require('fs')
        const queryObject3 = url.parse(req.url,true).query;
        const data3 = queryObject3
        const data3JSON = JSON.stringify(data3);
        const parseData3 = JSON.parse(data3JSON);
        const giftcardtypechecker = GiftCardType
        var GiftCardType = parseData3.giftcardtype;
switch (GiftCardType) {
  case "steam":
    console.log("Gift Card Selected - Steam");
    break;
  case "gamestop":
    console.log("Gift Card Selected - GameStop");
    break;
  case "amazon":
    console.log("Gift Card Selected - Amazon");
    break;
  default:
    console.log("Gift Card Purhcase unsuccessful - type wasn't named or is incorrect!")
    bad()
    return;
}
var GiftCard = parseData3.giftcardcode;
var Emailaddress = parseData3.email;
var Name = parseData3.name
// Checks if info is given
console.log(GiftCard)
if ( typeof GiftCard !== 'undefined')
{
  // nothing happens
}
else
{
  console.log("Gift Card Purhcase unsuccessful - Gift Card Code - Wasn't Given!")
  bad()
  return;
}
if ( typeof Emailaddress !== 'undefined' && Emailaddress )
{
  // nothing happens
}
else
{
  console.log("Gift Card Purhcase unsuccessful - User Email - Wasn't Given!")
  bad()
  return;
}
if ( typeof Name !== 'undefined' && Name )
{
  // nothing happens
}
else
{
  console.log("Gift Card Purhcase unsuccessful - User Name - Wasn't Given!")
  bad()
  return;
}
// all info valid getting status Code
// Make request
const axios = require('axios')
// Make request
axios.get(giftcardtickethandlerurl + '?secret=' + giftcardsecret + '&currenturl=' + giftcardtickethandlerurl).then(resp => {
var statusurl = resp.data;
var str = statusurl;
    try{
var str_pos = str.indexOf("paymentstatus");
if (str_pos > -1) {
  // nothing happens
} else {
  
}
    }
    catch(e){
  console.log("Gift Card Purhcase unsuccessful - Admin Error")
  bad()
  console.log("Admin: The Secret Key is NO longer valid, Please verify this to continue.");
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(justtoletyouknowwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('Just to let you know...');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Admin webhook info was not sent because it is disabled! to enable this change webhook env to true");
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
hook.send("Hey... Just to let you know, A user tried to purchase a launcher account using a gift card and was returned a unsuccessful json error. The REASON for this happening is because attempting to access the website using the secret came back invalid meaning the herokuapp giftcardsecret variable does not match the secret for the update status server. Please update your secret.");
// Admin webhook info sent!
  } else { 
    // Webhook env was set to an unknown value
    console.log("Admin webhook info was not sent because the webhook env was set to an unknown value.");
  }}
  return;
    }
// All info is valid and verified sending info now.
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(giftcardticketwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('SgtGigdi-TicketBot');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
let url2 = statusurl;
let statusid = url2.replace(giftcardtickethandlerurl, "");
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Webhook info was not sent because it is disabled! to enable this change webhook env to true");
    console.log("Sending Purchase info here because purchase info was not sent to discord server.");
    console.log("A user is attempting to purchase SgtGigdisLauncher using a gift card. Gift Card Info: Gift Card Type: " + GiftCardType + " Gift Card Code: " + GiftCard + ". User Info: " + " User IP: " + ip + " User Email: " + Emailaddress + " User Name: " + Name + " StatusID: " + statusid + ". Please verify and confirm this information and respond to the email. - Current Date: " + date_time);
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
hook.send("A user is attempting to purchase SgtGigdisLauncher using a gift card. Gift Card Info: Gift Card Type: " + GiftCardType + " Gift Card Code: " + GiftCard + ". User Info: " + " User IP: " + ip + " User Email: " + Emailaddress + " User Name: " + Name + " StatusID: " + statusid + ". Please verify and confirm this information and respond to the email. - Current Date: " + date_time);
// webhook info sent!
console.log("Webhook info sent!");
// Logs purchase
console.log("A new Gift Card Purchase Ticket has been created check the discord server for more information.");
  } else { 
    // Webhook env was set to an unknown value
    console.log("Webhook info was not sent because the webhook env was set to an unknown value.");
    console.log("Sending Purchase info here because purchase info was not sent to discord server.");
    console.log("A user is attempting to purchase SgtGigdisLauncher using a gift card. Gift Card Info: Gift Card Type: " + GiftCardType + " Gift Card Code: " + GiftCard + ". User Info: " + " User IP: " + ip + " User Email: " + Emailaddress + " User Name: " + Name + " StatusID: " + statusid + ". Please verify and confirm this information and respond to the email. - Current Date: " + date_time);
  }}
console.log("Gift Card Purchase Created! Awaiting Review...")
res.statusCode = '202';
res.end('{status: "Gift Card Purchase Created! Awaiting Review!", url: "' + statusurl + '"}');
// done
// Finished everything important returns and exits below.
});
return;
} else {
  // nothing happens trys next api
}
var str90 = req.url;
var str_pos = str90.indexOf("/purchase/api/v1");
if (str_pos > -1) {
// no else or then because thats the end of the
//end of request URLS
//Below gets IP address and sets it as variable "ip"
//var ip = req.headers['x-forwarded-for'] || 
        //req.connection.remoteAddress || 
        //req.socket.remoteAddress ||
        //req.connection.socket.remoteAddress;
// end
if ( typeof token !== 'undefined' && token )
{
  
}
else
{
  bad();
  return;
}
if ( typeof item !== 'undefined' && item )
{
  
}
else
{
  console.log("purchase unsuccessful! - item not being declared")
  bad()
  return;
}
  const queryObject = url.parse(req.url,true).query;
  // grabs URL params and puts it into a json file
  const data = queryObject
  const dataJSON = JSON.stringify(data);
  const parseData = JSON.parse(dataJSON);
  var token = parseData.token;
  var item = parseData.item;
  var confirm = parseData.confirm;
if(confirm == "true"){ 
    // good
    
  } else { 
    console.log("purchase unsuccessful! - confirm not being true")
    bad()
    return;
  }
// puts URL params into vars
var http = require("https");
var EventEmitter = require("events").EventEmitter;
var body = new EventEmitter();
const path = require('path')
const filePath = path.resolve(__dirname, './items/items.json')
fs.readFile(filePath, (err, data) => {
  if(err){
    console.log("Admin Error! Purchase File Not Found!")
    console.log("purchase unsuccessful!")
      res.end(myJSON)
      return;
  } else {
try {
    const obj = JSON.parse(data);
    var price = "obj" + "." + item;
    var purchaseamount = eval(price);
}
catch (e) {
  console.log("purchase unsuccessful! - invalid item given")
  bad();
  return;
}
finally {
  // nothing
}
    const obj = JSON.parse(data);
    var price = "obj" + "." + item;
    var purchaseamount = eval(price);
    console.log("A new purchase request has been started.");
    console.log("The purchase price is: " + purchaseamount);
    var http = require("https");
var options = {
  "method": "GET",
  "hostname": "login.xsolla.com",
  "port": null,
  "path": "/api/users/me",
  "headers": {
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
    const data = body.toString()
    const obj = JSON.parse(data);
    var user_id = (obj.id);
    const user_nickname = (obj.nickname);
    const user_firstname = (obj.first_name);
    const user_email = (obj.email);
    console.log("The purchase user ID is: " + user_id);
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
try {
  const currentamount = jsonParsed[0].value;
}
catch (e) {
  console.log("purchase unsuccessful! - invalid token or this user has no GigdiBucks")
  bad();
  return;
}
finally {
  // nothing
}
  const currentamount = jsonParsed[0].value;
  console.log("The current amount of GigdiBucks on " + user_id + " account is: " + currentamount)
  var totalleft = currentamount - purchaseamount;
  console.log("The total left after purchase on " + user_id + " account is: " + totalleft)
  if(totalleft == 0){ 
    // good
    var Good = "good";
  } else { 
    // go to next
  }
  if(totalleft > 0){ 
    // good
  } else { 
    if(Good === "good"){ 
      // good
    } else { 
      console.log("Purchase unsuccessful! User does not have enough GigdiBucks to complete purchase!")
      bad();
      return;
    }
  }
  var totalleft = totalleft + "";
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
    var stuf3f = jsonParsed.login_url;
    var request = require('request');
    var url = stuf3f;
    request({ url: url, followRedirect: false }, function (err, res, body) {
try {
  var location = res.headers.location;
}
catch (e) {
      console.log("Purchase unsuccessful! XSOLLA ACCOUNT USERNAME OR PASSWORD DOES NOT MATCH!");
      badadmin();
      return;
}
finally {
  // Do nothing
}
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
// sends email
// sets variables
// sets send variables
var to_name = user_nickname;
var firstname = user_firstname;
var email = user_email;
var clientip = ip;
var price = purchaseamount;
// set template
var fs = require('fs');
var content = fs.readFileSync('email/purchasetemplate.html','utf8');
// replaces template variables
let result = content.replace("{{to_name}}", to_name);
let result2 = result.replace("{{email}}", email);
let result3 = result2.replace("{{clientip}}", clientip);
let result4 = result3.replace("{{token}}", token);
let result5 = result4.replace("{{to_name}}", to_name);
let result6 = result5.replace("{{year}}", year);
let result7 = result6.replace("{{price}}", price);
let result8 = result7.replace("{{firstname}}", firstname);
let finalresult = result8.replace("{{item}}", item);
console.log("The user email is: " + email)
console.log("Purchase has been validated and is being completed...")
// Adds mail options
var mailOptions = {
  from: 'sgtgigdilauncher@gmail.com',
  to: email,
  bcc: "SgtGigdi@gmail.com",
  subject: 'SgtGigdiLauncher - Purchase Successful!',
  html: finalresult
};
// variables set ready to send email
  if(process.env.email == "false"){ 
    // email env was set to an false so it was not sent
    console.log("E-mail was not sent because it is disabled! to enable this change email env to true");
  } else { 
    //go to next
  if(process.env.email == "true"){ 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Email sent: unsuccessful! - reason ' + error);
  } else {
    console.log('Email receipt sent: Successful!');
  }
});
// email info sent!
  } else { 
    // email env was set to an unknown value
    console.log("E-mail info was not sent because the email env was set to an unknown value.");
  }}
// email has been sent!
// sends webhook
// sets variables
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(purchasebotwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('SgtGigdi Purchase Logs');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Webhook purchase info was not sent because it is disabled! to enable this change webhook env to true");
    console.log("Sending Purchase info here because purchase info was not sent to discord server.");
    console.log("A new purchase has been made through the account: " + user_id + " Logged in with IP: " + ip + ". -  INFO ABOUT THE PURCHASE: Purchase Date: " + date_time + " Item Purchased: " + item + ", The purchase amount is " + purchaseamount + ", The current amount was " + currentamount + ", and amount left is " + totalleft + ". That is all for now.");
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
hook.send("A new purchase has been made through the account: " + user_id + " Logged in with IP: " + ip + ". -  INFO ABOUT THE PURCHASE: Purchase Date: " + date_time + " Item Purchased: " + item + ", The purchase amount is " + purchaseamount + ", The current amount was " + currentamount + ", and amount left is " + totalleft + ". That is all for now.");
// webhook info sent!
console.log("Webhook purchase info sent!");
// Logs purchase
console.log("A new purchase has been made. Info about the purchase can be found in discord purchase logs.");
  } else { 
    // Webhook env was set to an unknown value
    console.log("Webhook info was not sent because the webhook env was set to an unknown value.");
    console.log("Sending Purchase info here because purchase info was not sent to discord server.");
    console.log("A new purchase has been made through the account: " + user_id + " Logged in with IP: " + ip + ". -  INFO ABOUT THE PURCHASE: Purchase Date: " + date_time + " Item Purchased: " + item + ", The purchase amount is " + purchaseamount + ", The current amount was " + currentamount + ", and amount left is " + totalleft + ". That is all for now.");
  }}
// Finished everything important goes to function that gives user the status below
        good();
      });
    });
    req.write(JSON.stringify({
      attributes: [{key: 'GigdiBucks', permission: 'private', value: totalleft}],
      publisher_id: 156466,
      publisher_project_id: 80382,
      removing_keys: []
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
  });
});
req.write(JSON.stringify({
  keys: ['GigdiBucks'],
  publisher_project_id: 80382,
  user_id: (user_id)
}));
req.end();
  });
});

req.end();
  }
})
// Done with purchase
} else {
// no api has been detected.
var str12 = req.url;
var str_pos24 = str12.indexOf("/vrchat/api/v1/ippuller/pull");
if (str_pos24 > -1) {
// Created so that it doesn't return an endpoint not found because of how long the pull takes to show.
setTimeout(function() {
var apijson = {
  "error": "The user has not been pulled yet.",
  "status_code": 404
};
var jsonerror = JSON.stringify(apijson);
res.statusCode = 404;
res.end(jsonerror);
return;
}, 6000);
return;
}
var str12 = req.url;
var str_pos24 = str12.indexOf("/vrchat/api/v1/ippuller/start");
if (str_pos24 > -1) {
// Created so that it doesn't return an endpoint not found because of how long the ip puller takes to start.
return;
}else{
var apijson = {
  "error": "The endpoint you're looking for is not implemented by our system.",
  "status_code": 404
};
var jsonerror = JSON.stringify(apijson);
res.statusCode = 404;
res.end(jsonerror);
return;
}
}
// Functions
function bad() {
   res.statusCode = 401;
   res.end(myJSON);
}
function badadmin() {
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(justtoletyouknowwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('Just to let you know...');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Admin webhook info was not sent because it is disabled! to enable this change webhook env to true");
  } else { 
    //go to next
if(process.env.webhook == "true"){ 
hook.send("Hey... Just to let you know, A user tried to purchase an item and was given an error. This error is because either the username or password does not match to the xsolla details we were given. We have returned a 401 purchase unsuccessful message for them.");
// Admin webhook info sent!
} else { 
    // Webhook env was set to an unknown value
    console.log("Admin webhook info was not sent because the webhook env was set to an unknown value.");
  }}
  res.statusCode = 401;
  res.end(myJSON);
    }
function good() {
   //Finishes purchase
   console.log("Purchase Complete!")
   res.statusCode = 200;
   res.end(myJSON2);
   // Done!
}
function paymentgood() {
   //Finishes purchase
   console.log("Payment Successful!");
   res.statusCode = 200;
   res.end(myJSON2);
   // Done!
}
function goodlogin(ip) {
   //Finishes purchase
   console.log("Login on IP: " + ip + ". Complete!")
   res.statusCode = 200;
   res.end(loginsuccessful);
   // Done!
}
function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop);       
}
// Finds amount user paid for.
function findamount(number) {
     var number2="undefined"
     if (number === '96756') {
        // amount is 10000
        var number2 = "10000";
    }
    if (number === '61927') {
        // amount is 25000
        var number2 = "25000";
    }
    if (number === '49210') {
        // amount is 50000
        var number2 = "50000";
    }
    if (number === '18522') {
        // amount is 75000
        var number2 = "75000";
    }
    if (number === '04815') {
        // amount is 100000
        var number2 = "100000";
    }
    return number2;
    // end
}
function donothing() {
    // this literally does nothing
}
function startpayment(amounttogive, userid) {
var amounttogive = amounttogive;
var userid = userid;
var http = require("https");
const fs = require('fs')
const url = require('url');
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
    try{
      var gay = jsonParsed[0].value;
      console.log("Payment for user: " + user_id + " has been verified!");
    }
    catch
    {
      console.log("Payment Status: User may or may not have any GigdiBucks. We will continue.");
      var gay = "0";
      console.log("Payment for user: " + user_id + " is going to continue but the ID has not been verified.");
    }
var currentamount = parseInt(gay);
console.log(user_id + " Current Amount: " + currentamount);
var purchaseamount = amounttogive;
var purchaseamount = parseInt(purchaseamount);
console.log(user_id + " Payment Amount: " + purchaseamount);
var result2 = currentamount + purchaseamount;
var result = result2.toString()
console.log(user_id + " After Amount: " + result);
console.log("Sending funds to wallet...");
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
      console.log("Funds Sent!");
      // sends webhook
// sets variables
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook(purchasebotwebhookurl);
const IMAGE_URL = webhookpicture;
hook.setUsername('SgtGigdi Payment Logs');
hook.setAvatar(IMAGE_URL);
var date_time = new Date();
// variables set ready to send webhook
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it was not sent
    console.log("Webhook purchase info was not sent because it is disabled! to enable this change webhook env to true");
    console.log("Sending Payment info here because payment info was not sent to discord server.");
    console.log("A new payment has been issued to the account. AccountID: " + user_id + ". Having a current amount of GigdiBucks of: " + currentamount + ". Having a payment amount of: " + purchaseamount + ". And after the funds were sent has: " + result + ". This was sent as a log to verify payments.");
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
hook.send("A new payment has been issued to the account. AccountID: " + user_id + ". Having a current amount of GigdiBucks of: " + currentamount + ". Having a payment amount of: " + purchaseamount + ". And after the funds were sent has: " + result + ". This was sent as a log to verify payments.");
// webhook info sent!
console.log("Webhook purchase info sent!");
// Logs purchase
console.log("A new payment has been made. Info about the payment can be found in discord purchase logs.");
  } else { 
    // Webhook env was set to an unknown value
    console.log("Webhook info was not sent because the webhook env was set to an unknown value.");
    console.log("Sending Payment info here because payment info was not sent to discord server.");
    console.log("A new payment has been issued to the account. AccountID: " + user_id + ". Having a current amount of GigdiBucks of: " + currentamount + ". Having a payment amount of: " + purchaseamount + ". And after the funds were sent has: " + result + ". This was sent as a log to verify payments.");
  }}
// Finished everything important goes to function that gives user the status below
        paymentgood();
      return;
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
return;
}
function giftcardgood() {
   //Finishes purchase
   console.log("Gift Card Purchase Created! Awaiting Review...")
   res.statusCode = 202;
   res.end(status4);
   // Done!
}
};
    })
// end of server/request code
// backend for sever start code below.
server.listen(process.env.PORT || 8080, '0.0.0.0', (err) => {
    if(!err) {
        // server was successfully started
        rateLimit.init(ratelimittime, true); // HTTP-RateLimit has to be initialized before running any other function.
  if(ratelimit == "false"){ 
    console.log("RateLimit Info - The Rate Limit is disabled!");
  } else { 
    //go to next
  if(ratelimit == "true"){ 
console.log("RateLimit Info - The Rate Limit Has Been Enabled!");
  } else { 
    console.log("RateLimit Info - The Ratelimit is disbaled!");
  }}
    }
    else {
        // error while starting server
        console.log(`Error: ${err}`);
        process.exit(1);
    }
console.log("Checking variables...")
console.log("GIFTCARDHANDLER Info - The handler URL being used is: " + giftcardtickethandlerurl)
if ( typeof process.env.giftcardsecret !== 'undefined' && process.env.giftcardsecret )
{
  // GiftCard Purchases WORK!
  console.log("GiftCardSecret Info - Secret code was given all Gift Card purchases work!")
}
else
{
  // GiftCard Purchases do not work!
  console.log("GiftCardSecret Info - Secret code was not given all gift card purchases will be declined.")
}
if ( typeof process.env.ERROR_PAGE_URL !== 'undefined' && process.env.ERROR_PAGE_URL )
{
  // Error page set
  console.log("ERROR_PAGE_URL INFO - Error page is set!")
}
else
{
  // Error page is set to default value
  console.log("ERROR_PAGE_URL INFO - Error page is set to default page!")
}
if ( typeof process.env.MAINTENANCE_PAGE_URL !== 'undefined' && process.env.MAINTENANCE_PAGE_URL )
{
  // Error page set
  console.log("MAINTENANCE_PAGE_URL INFO - Maintenance Page is set!")
}
else
{
  // Error page is set to default value
  console.log("MAINTENANCE_PAGE_URL INFO - Maintenance page is set to default page!")
}
  if(process.env.webhook == "false"){ 
    // Webhook env was set to an false so it will not be sent
    console.log("Webhook Info - Webhooks will not be sent because it is disabled! to enable this change webhook env to true");
  } else { 
    //go to next
  if(process.env.webhook == "true"){ 
// Webhook env was set to true so it will be sent after purchases
console.log("Webhook Info - A webhook will be sent to discord after each purchase."); // THIS INCLUDES LOGIN ATTEMPTS
  } else { 
    // Webhook env was set to an unknown value so it will not be sent
    console.log("Webhook Info - Webhook ENV set to UNKNOWN VALUE and will not be sent after purchases! to enable this change webhook env to true");
  }}
  if(vrchatapi == "false"){ 
    // vrchatapi env was set to an false so it will not be sent
    console.log("VrChat-API Info - The VRCHAT-API will not be used on requests to the vrchatapi! to enable this change vrchatapi env to true");
  } else { 
    //go to next
  if(vrchatapi == "true"){ 
// vrchatapi was set to true so it will work
console.log("VrChat-API Info - The VRCHAT-API will be used and is available.");
  } else { 
    // vrchatapi env was set to an unknown value so it will not be sent
    console.log("VrChat-API Info - vrchatapi ENV set to UNKNOWN VALUE and will not be used on requests to the vrchatapi! to enable this change vrchatapi env to true");
  }}
// Checks email variable
  if(process.env.email == "false"){ 
    // Email env was set to an false so e-mails will not be sent
    console.log("E-mail Info - E-mails will not be sent because it is disabled! to enable this change email env to true");
  } else { 
    //go to next
  if(process.env.email == "true"){ 
// Email env was set to true so they will be sent after purchases
console.log("E-mail Info - An E-mail will be sent to the users inbox after each purchase."); // THIS INCLUDES LOGIN ATTEMPTS
  } else { 
    // Email env was set to an unknown value so it will not be sent
    console.log("E-mail Info - Email ENV set to UNKNOWN VALUE and will not be sent after purchases! to enable this change email env to true");
  }}
  console.log("Variables Checked!");
  console.log("SgtGigdi API Server is running...");
});
server.on('request', function(req, res) {
    // see all incoming requests here
    // Will be used eventually
});
// end of code
