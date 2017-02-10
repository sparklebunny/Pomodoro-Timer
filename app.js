//https://geeksretreat.wordpress.com/2012/08/03/html5-canvas-an-egg-timer-hourglass-with-animated-falling-sand/

// break and timer:
// click - to decrease min by 1 (0-5 on break; 0-25 on pomo)
// click + to increase min by 1 (0-5 on break; 0-25 on pomo)
// display amount of time on each
// click Start to begin timer - one for break and one for timer
// click stop to stop timers
// click reset to clear timers to 0
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
	$("#pomoInput").val(pomoMinutes);
	
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
			$("#pomoInput").val(pomoMinutes);
		}
	});






}); // FIN