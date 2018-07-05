var request = require('request');
var j = request.jar();


function getMainPage() {
    console.log("runing main page...")
    var url = 'https://www.pumab2b.com/Home.aspx'
    var options = {
        method: 'GET',
        url: url,
        jar: j
    }
    request(options, function(error, response, body) {
        if (error) return console.log('Something\'s wrong: ', error)
        var cookies = j.getCookies(url);
        console.log(cookies)
        saveCookieDB(cookies.toString()) //update cookie
        console.log(body)
    });
}