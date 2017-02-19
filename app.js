//https://geeksretreat.wordpress.com/2012/08/03/html5-canvas-an-egg-timer-hourglass-with-animated-falling-sand/

$(document).ready(function() {

	var breakMinutes = 5;
	var pomoMinutes = 25;
	var countdownInterval = null;
	var buzzer = $("#buzzer")[0];
	
	//hide visual message for end of timer signal
	$(".timeout_message_show").hide();
	
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

	// function for determining countdown time
	function countDown(time) {
		
		//convert number passed to CountDown function to seconds
		var countdownSeconds = time * 60;
		
		// convert time to minutes and seconds, rounding with Math.floor to
		//eliminate weird decimal stuff from happening
		countdownInterval = setInterval(function(){
			
			var pomoMinutes = Math.floor(countdownSeconds / 60);
			var pomoSeconds = Math.floor(countdownSeconds % 60);
			
			pomoMinutes = pomoMinutes < 10 ? "0" + pomoMinutes : pomoMinutes;
			pomoSeconds = pomoSeconds < 10 ? "0" + pomoSeconds : pomoSeconds;
			
			if (countdownSeconds === 0) {
				buzzer.play();
				$(".timeout_message_show").show();
				$("#countdownTime").hide();
			}
			
			var displayTime = pomoMinutes + ":" + pomoSeconds;
			document.getElementById("countdownTime").innerHTML = displayTime;
			countdownSeconds-- || clearInterval(countdownInterval);
		}, 1000)
	
	}

	// Starts the pomodoro clock
	var startPomoClock = $("#start").on("click", function(){

		countDown(pomoMinutes);

	});

	// Stops clock on current min/sec
	var stopPomoClock = $("#stop").on("click", function(){
		
		clearTimeout(countdownInterval);	
	});
 
 	// Resets clock to time/number shown on pomodoro input
	var resetPomoClock = $("#reset").on("click", function(){
		
		clearTimeout(countdownInterval);	

		var currentPomoMinutes = (document.querySelector("#countdownTime").innerHTML = pomoMinutes);
	});
		

}); // FIN

////// NOTES BELOW

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






