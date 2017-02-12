//https://geeksretreat.wordpress.com/2012/08/03/html5-canvas-an-egg-timer-hourglass-with-animated-falling-sand/

// break and timer:
// DONE: click - to decrease min by 1 (0-5 on break; 0-25 on pomo) 
// DONE: click + to increase min by 1 (0-5 on break; 0-25 on pomo)
// display amount of time of each timer - convert to min/seconds
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
	var breakStop = false;
	var pomoStop = false;
	var breakReset = "";
	var pomoReset = "";
	
	// initializing the display to value of breakMinutes
	$("#breakInput").val(breakMinutes);
	// initializing the display to value of breakMinutes
	$("#pomoInput").val(pomoMinutes).html(".minutes");
	

	// decrease break by 1
	$("#brdecrease").on("click", function(){
		if(breakMinutes > 0 && breakMinutes < 6) {
			breakMinutes -= 1;
			$("#breakInput").val(breakMinutes);
		}
	});
	
	//increase break by 1
	$("#brincrease").on("click", function(){
		if(breakMinutes >= 0 && breakMinutes < 5) {
			breakMinutes += 1;
			$("#breakInput").val(breakMinutes);
		}
	});

	// decrease Pomo by 1
	$("#pomominus").on("click", function(){
		if(pomoMinutes > 0 && pomoMinutes < 26) {
			pomoMinutes -= 1;
			$("#pomoInput").val(pomoMinutes);
		}
	});
	
	//increase Pomo by 1
	$("#pomoplus").on("click", function(){
		if(pomoMinutes >= 0 && pomoMinutes < 25) {
			pomoMinutes += 1;
			$("#pomoInput").val(pomoMinutes).append("span.minutes");
		}
	});

	// converting minutes to min/seconds

	var fragmentTime;
	var minutes = $("span.minutes").text(); //get value from pomoMinutes
	var seconds = $("span.seconds").text(); // starts with 0 

	minutes = parseInt(minutes);
	seconds = parseInt(seconds);

	// if for some reason they app goes haywire and isn't a number; return 00 for minutes & 00 for seconds
	if (isNaN(minutes)) {
		minutes = 00;
	}

	if (isNaN(seconds)) {
		seconds = 00;
	}


	fragmentTime = (60 * minutes) + (seconds);

	displayMinutes = $("span.minutes");
	displaySeconds = $("span.seconds");

	startTimer(fragmentTime, displayMinutes, displaySeconds);

	function startTimer(duration, displayMinutes, displaySeconds) {
		var timer = duration;
		displayMinutes, displaySeconds;

		var timeIntervalID = setInterval(function(){
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			displayMinutes.textContent = minutes;
			displaySeconds.textContent = seconds;

			if (--timer < 0) {
				timer = 0;
			} else if (timer == 0) {
				clearInterval(timeIntervalID);
				// add audio chime here
			}

		});
	}








}); // FIN