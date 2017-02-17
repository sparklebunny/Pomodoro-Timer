//https://geeksretreat.wordpress.com/2012/08/03/html5-canvas-an-egg-timer-hourglass-with-animated-falling-sand/

// break and timer:
// DONE: click - to decrease min by 1 (0-5 on break; 0-25 on pomo) 
// DONE: click + to increase min by 1 (0-5 on break; 0-25 on pomo)
// display amount of time of each timer - convert to min/seconds using setInterval()
// click Start to begin timer 
// show visual of time lapse (sand filling hourglass)
// click stop to stop timer
// click reset to clear timer to 0
// chime/sound at end of each timer w/ visual cue?
// each timer's display uses #countdown 
// countdown shown in min and seconds
// both timers cannot start at same time; only one timer can run

$(document).ready(function() {

	var breakMinutes = 5;
	var pomoMinutes = 25;
	
	
	// initializing the display to value of breakMinutes
	$("#breakInput").val(breakMinutes);
	// initializing the display to value of breakMinutes
	$("#pomoInput").val(pomoMinutes);
	

	// decrease break by 1
	$("#brdecrease").on("click", function(){
		if(breakMinutes > 0 && breakMinutes < 16) {
			breakMinutes--;
			$("#breakInput").val(breakMinutes);
		}
	});
	
	//increase break by 1
	$("#brincrease").on("click", function(){
		if(breakMinutes >= 0 && breakMinutes < 15) {
			breakMinutes++;
			$("#breakInput").val(breakMinutes);
		}
	});

	// decrease Pomo by 1
	$("#pomominus").on("click", function(){
		if(pomoMinutes > 0 && pomoMinutes < 59) {
			pomoMinutes--;
			$("#pomoInput").val(pomoMinutes);
		}

		//display current value on large timer
		document.querySelector("#countdownTime").innerHTML = pomoMinutes;
	});
	
	//increase Pomo by 1
	$("#pomoplus").on("click", function(){
		if(pomoMinutes >= 0 && pomoMinutes < 59) {
			pomoMinutes++;
			$("#pomoInput").val(pomoMinutes);
		}

		//display current value on large timer
		document.querySelector("#countdownTime").innerHTML = pomoMinutes;
	});



	function countDown(time) {

		var interval = setInterval(function(){
			document.getElementById("countdownTime").innerHTML = time;
			time-- || clearInterval(interval);
		}, 1000)
	}

	//starts the pomodoro clock
	var startPomoClock = $("#start").on("click", function(){

		countDown(pomoMinutes);

	});
///
/// Need this to work
	var stopPomoClock = $("#stop").on("click", function(){

		var timer = setTimeout(countDown, 1000);
		clearTimeout(timer);		
	});
///
/// Need this to work
	var resetPomoClock = $("#reset").on("click", function(){
	
		var currentPomoMinutes = (document.querySelector("#countdownTime").innerHTML = pomoMinutes);

		countDown(currentPomoMinutes);

	});
		




	// converting minutes to min/seconds





////// NOTES BELOW


//var countdownSeconds = 0; or countdownMinutes 




}); // FIN

// state: is timer running or not
// when pomo up - switch to break time
// is pomo running?
// is break running?
// both can't run at same time 



// action: click start btn to start timer
// set interval of pomodoro
// clicking plus btn --- (state ->) adds 60 seconds to timer -- account for 59
// clicking minus btn --- (state ->) subtracts 60 seconds from timer -- account for 59
// when resetting timer, reset to last number chosen for countdown
// sound chime at end of timers 






