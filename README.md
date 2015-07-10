#RH
### Really simple Http library
      _____  _    _ 
     |  __ \| |  | |
     | |__) | |__| |
     |  _  /|  __  |
     | | \ \| |  | |
     |_|  \_\_|  |_|

####Install

   Download the [RH.js](https://raw.githubusercontent.com/tuxrace/RH/master/RH.js "RH.js") file, then add in script src, then we are good to go

     <script type="text/javascript" src="RH.js"></script>

####Usage

   To make a GET request

     RH.get("https://restcountries.eu/rest/v1/name/philippines", function (res) {
         console.log(res);
     });
    
   To make a POST request
	
	 RH.post("/rest/posting",{name:John,age:25}, function (res) {
    	console.log(res);
     });

####Complete Example Code

     <!doctype html>
	 <html>
	  <head>
	 	<title></title>
			<script type="text/javascript" src="RH.js"></script>
		</head>
		<body>
			<script type="text/javascript">
				RH.get("http://api.reddit.com/hot",
					function(res){
						document.write(res)
					}
				)
			</script>
		</body>
	 </html>

####Author

     Gerard Banasig