var appId = "0ba1b50f1a3738d6071b91674041def7";
var url = "https://api.openweathermap.org/data/2.5/weather?";
var unsplashUrl = "https://api.unsplash.com/photos/random?featured";
var unsplashClientId = "a24e1fa3b77c93935f0552ebf6354a3540e9aa356caf80a1fcb55125fdb16110";

function weather(){
    var ipUrl = "https://ipapi.co/json/";
    var city = "Toronto";
        
    console.log("starting network call");
        $.getJSON(ipUrl, function(data){
            console.log("city - " + data.city);
            getWeather(data.city)
        });
}

function getWeather(city){
    $.getJSON(url + "q=" + city + "&appid=" + appId, function(data){
        $('#temp').html('It\'s ' + Math.floor((data.main.temp - 273.15)) + '°C in ' + data.name);
        $('#location').hide();
        getBg()
    });
}

function getBg(){
    $.getJSON(unsplashUrl + "&client_id=" + unsplashClientId , function(data){
        console.log(unsplashUrl + "client_id=" + unsplashClientId);
        
        // change data.urls.full to data.urls.regular for faster loading but image quality will be slightly worse
        var photoRegularUrl = data.urls.full;
        console.log(photoRegularUrl);
        $(".bg").css("background-position", "center");
        $(".bg").css("background-repeat", "no-repeat");
        $(".bg").css("background-size", "100%");
        $(".bg").css("background-image", "url(" + photoRegularUrl + ")");       
    });
}


weather();