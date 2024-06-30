1/4/21
find a way to host a php server and debug it by logging the result and finding where stuff goes wrong adding custom variables to send it to the user after purchase confirmed ect
-SgtGigdiTeam
1/4/21 9pm
You dont need to host a PHP server as I debugged the error messages sending a request to a blank herokuapp for the result for example - example.herokuapp.com/NOHMACADDRESS and in the heroku logs you would know what the error was based on the location requested. I found out that errors were happening mainly because the order total did not equal the order amount on the thing to fix this I added a if then statement
PULLED RIGHT OUT OF THE CODE
//real
if ($item_name == "SgtGigdi-Launcher-Account") {
  $order_total = 1;
} else {
  $order_total = 100;
}
this code shows that if the order item name is SgtGigdi-Launcher-Account the price I have it set to at the moment is 1 dollar so if the item matches then it continues if it does not match then the user did some vodo therefor setting the price as 100 dollars so if they didnt pay more than 100 dollars then they dont get anything. After I did this the code worked fine BUT I did realize that the error messages MUST be displayed to the coinpayments servers with no extra display such as a background for example it must say IPN Error: IPN Mode is not HMAC for that error otherwise the result in coinpayments IPN will say failed and it will attempt to send it again. SO IF FOR EXAMPLE THE USER GOT THEIR PRODUCT AND IT SENT THE SAME REQUEST THEN IT WOULD BE DUPLICATED thats also why there is a secret so users cant send fake requests if they somehow obtain the URL. THIS WHOLE SEGMENT ALSO MEANS THAT THE CALLBACK URL CAN BE SOMETHING DIFFERENT AND DOESN'T EFFECT THE WAY PURCHASES HAPPEN AND YOU CAN SORT THE DIFFERENT ITEM NAMES AND STUFF THE CALLBACK URL COULD LITERALLY BE A PAGE THAT SAYS GOOD AS A RESULT. THATS IT OR YOU COULD DO SOMETHING LIKE OH IDK MAYBE AN EMAIL TO THE USER OR WHATEVER
goals to do is figure out how to use custom variables to the server cause this is what I will use to send the token as a variable having the server verify and send the payment to the account associated.
Thats all the CODE I left out on is in the current folder. Go check it out
-------