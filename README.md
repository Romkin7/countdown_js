# countdown_js
Set the information in the form and start this awesome countdown app.

Hi all,
Thank you for reading this introduction.
Here I will explain how my app works so you can have beter understanding how to use browsers localStorage and window.location to navigate between pages.

this site doesn't have navigation so navigation is enabled with js logic, it is based on the fact that it checks to see weather or not your broweser has in it's localStorage stored configuration object in JSON format if it is present app will show countdown page, otherwise you will be redirected to the set information page.

I'm using class to set settings object and pass it ajfter JSON.stringify to window.localStorage.

I'm also checking dynamically to see what html file is opened.
First I set pathname of window.location object to variable path path is actually an array of that splitted path and it doesn't contain any /, because I use .split("/").

let path = window.location.pathname.split("/");

after splitting window.location.pathname and saving it into path variable as array.
I check to see at what index filename is located in that array like so

if(path[path.indexOf("index.html")] === "index.html") 

this way is needed to do because in different environments window.location.pathname is different but it is always separated by / so this method was most relevant for this purpose.
And I don't have to hardcode in that url.

Countdown logic is implemented using setInterval timing function and doing some math

After time runs out message you difiened in the beginning will pop up and timer will stop.
localStorage will also be emptied in 30 seconds after message were displayed.

This app will store in all of your different browsers all kinds of countdowns you like to have.

hopefully you will enjoy it.

any feedback will be appreciated.
Cheers, Roman T
