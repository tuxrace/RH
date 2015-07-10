(function () {
    'use strict';
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var serialize_json = function (json_str) {
        var s = "";
        var b = JSON.parse(JSON.stringify(json_str));
        Object.keys(b).map( function (k) {			
            s += k + "=" + b[k] + "&";
        });		
        return s.substr(0, s.length - 1);
    };
    var RH = {
        get: function (url, callback) {
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    callback(xmlhttp.responseText);
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        },
        post: function (url, json_data, callback) {    
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    callback(xmlhttp.responseText);
                }
            };
            xmlhttp.open("POST", url, true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xmlhttp.send(serialize_json(json_data));
        }
    };
    self.RH = RH;
})();