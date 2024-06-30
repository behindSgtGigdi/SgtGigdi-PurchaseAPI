<div align=center>
  <img src="/readmesrc/images/img.jpg" alt="SgtGigdi-Launcher">

  ### SgtGigdi API is a server that handles all purchase requests!
  
</div>
<br>

### Supported languages:
 - [x] English

More languages soon to come to SgtGigdi Launcher

### Requirements:
- Index.js variables configured
- repl.it URLS configured in code to the url of the repl you deploy using the node js buildpack and code shown in Status-Page Folder
- Deployed to heroku (PLEASE NOTE THAT THE VARIABLES SET IN INDEX ARE STILL MY VARIABLES AND WILL BE USING MY SERVER TO CHANGE THIS FORK THIS REPO AND CHANGE THE TEMPLATE URL TO YOUR GITHUB PAGE) - <a href="https://heroku.com/deploy?template=https://github.com/SgtGigdi/SgtGigdi-Purchase-API"> <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">

### Setup instructions:
```
Set ENV Variables as follows everything else is optional
ERROR_PAGE_URL=https://sgtgigdilauncher.000webhostapp.com/errorpages/server-crashed
giftcardsecret=NoTnyF6fYSW8Vs5DdCpG9YnTD
MAINTENANCE_PAGE_URL=https://sgtgigdilauncher.000webhostapp.com/errorpages/Maintenance
webhook=false - can be true or false
email=false - can be true or false
giftcardtickethandlerurl=*url of ticket page*
giftcardticketwebhookurl=*Discord webhook url to send good purchases for Gift Cards to*
loginwebhookurl=*Discord webhook url to send successful logins to*
gmailemail=*email of gmail account*
gmailpass=*password of gmail*
justtoletyouknowwebhookurl=*ADMIN NOTIFICATIONS WEBHOOK URL*
purchasebotwebhookurl=*Discord webhook url to send good purchases to*
webhookpicture=*url of a picture for your discord webhooks*
xsollapassword=*Xsolla password*
xsollausername=*Xsolla email*
kahootlocked=true - can be true or false (depricated)
vrchatapi=true - can be true or false
```

### How to use:
```
https://*appname*.herokuapp.com
```
- A new purchase API webpage will be available

### Help:
```
usage: Open the website

A simple purchase API made for SgtGigdi Launcher

optional arguments:
  -/purchase/api/v1?token=*account-token*&item=*storeitem*&confirm=*true or false must be true to work* - Purchase API
  -/purchaseusinggiftcard/api/v1?giftcardtype=*type of gift card must be 1 of 3 values to work steam,amazon,gamestop*&giftcardcode=*giftcardcode*&email=*User Email*&name=*User Name* - Gift Card Purchase API
  -/addtoaccount/secret5125700321/confirm?userid=*userid*&number=*purchaseamountIDnumber - ID NUMBERS IN FEATURES*
  - Kahoot Spammer API
  -/kahootspammer?antibot=true&gamepin=8964102&numberob=2000&controlbots=false (depricated)

required arguments:
  start https://*appname*.herokuapp.com
```

## Features:

### FEATURES TO COME:
- A website feature/display
- Coinpayments result handler
- More server API features
- Discord BOT
- Status page
- CODE CLEANUP
- Redesign
- purchase amount ID numbers (96756, 61927, 49210, 18522, 04815.) - goes in order
- Admin page + working with C# to add currency to account ect
- Api features such as a kahoot spammer bot works after purchase on SgtGigdi-Launcher

### API-DETAILS:
- Method for making purchases with set items
- Makes a giftcard status page (REQUIRES REPL PAGE STATUS PAGE FILES OR ANYTHING THAT CAN HOST THAT)
- Logs pretty much everything
- Emails and webhook sending with customization and being able to be disabled through env working
- Working GET request website
- Working JSON reply
- ERROR MESSAGES WITH JSON RESPONSES
- Startup that says whats enabled
- A new VRCHAT api that says the current online users.
- NODE-JS Server (NOT AN EXPRESS SERVER) - better for serving webpage quickly
- Rate Limit
- vrc 2 minutes for player 1
- vrc 5 minutes player 2
- vrc 30 minutes after pulling finished.
//NEEDS A LOT OF FIXING UP SUCH AS ADDING MORE INFO LOGS
