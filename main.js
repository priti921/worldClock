var meridiem = "AM";
window.onload = (function() {
	function displayTime() {
		var currentTime = new Date();
		hours = currentTime.getHours();
		minutes = currentTime.getMinutes();
		seconds = currentTime.getSeconds();
		setInterval(displayTime, 500);

		//Adding 0//
		if(hours < 10){
			hours = "0" + hours;
		}
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(seconds < 10) {
			seconds = "0" + seconds;
		}

		//Conneting with ids//
		var londonTime = document.getElementById('london');
		var sidneyTime = document.getElementById('sidney');
		var newYorkTime = document.getElementById('newYork');
		var tokyoTime = document.getElementById('tokyo');

		
		londonTime.innerHTML = (hours - 5) + ":" + (minutes - 30) + ":" + seconds + " " + meridiem;
		
		sidneyTime.innerHTML = (hours + 5) + ":" + (minutes + 30) + ":" + seconds + " " + meridiem;
	
		newYorkTime.innerHTML =(hours - 9) + ":" + (minutes - 30) + ":" + seconds + " " + meridiem;
	
		tokyoTime.innerHTML = (hours + 3) + ":" + (minutes + 30) + ":" + seconds + " " + meridiem;
		
		//set AM and PM//
		if(hours > 12){
			meridiem = "PM";
		  }
		if(hours === 0) {
			hours = 12;
		  }
	}
	displayTime();

})