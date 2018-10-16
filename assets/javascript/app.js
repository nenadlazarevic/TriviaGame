var questions = ["q1?", "q2?", "q3?", "q4?"]
var answers = [["q1A", "q1B", "q1C", "q1D"], ["q2A", "q2B", "q2C", "q2D"], ["q3A", "q3B", "q3C", "q3D"], ["q4A", "q4B", "q4C", "q4D"]]
var corectAnswer = ["B. q1B", "C. q2C", "A. q3A", "D. q4D"]
var count = 0
var counter = 30
var timer;

function startsScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$("#main").html(startScreen);
}
startsScreen()

$("body").on("click", ".start-button", function(evant){
    display()
})

$("body").on("click", ".answer", function(evant){

    selectedAnswer = $(this).text();
    if (selectedAnswer === corectAnswer[count]) {
        win()
        clearInterval(timer)
    } else {
        alert("wrong")
    }

})

function display() {
   gameHTML= "<p class='text-center timer-p'>Time Remaining: <span id='timer'>" + counter + "</span> </p><p class='text-center'>" + questions[count] + "</p><p class='first-answer answer'>A. " + answers[count][0] + "</p><p class='answer'>B. "+answers[count][1]+"</p><p class='answer'>C. "+answers[count][2]+"</p><p class='answer'>D. "+answers[count][3]+"</p>";
    $("#main").html(gameHTML)
    
    
}


function timerWrapper() {
	timer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timer);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$("#timer").html(counter);
	}
}

function win(){
    gameHTML = "<h1 id=laza>WIN</h1>";
    $("#main").html(gameHTML)
    setTimeout(Sec, 4000);
}

function Sec() {
    if ( count < 4) {
    count++
    counter = 30;
    timerWrapper();
    display();

} else {
        alert("wrong")
}
display()
}






