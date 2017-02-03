var client_id=T3KOYAUN4JFFDUNTFTY4XJADKTF3BTXSG4NG4RH4B25ID2HG
var client_secret=BRJN3J04RVAZHMCC4MYEKSWWPJYPU2HYXQEYYHLRIERUC2AD

$(document).ready(function() 
    $("#Search").click(function() {
        var id = ($("#SearchBox").val())
        var url = "https://api.foursquare.com/v2/venues/search="
        var inputField = "#SearchBox"
        var result = url + id
        $.getJSON(result, function(response) {
            console.log(response)