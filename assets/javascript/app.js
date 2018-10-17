var questions = ["What Is the Capital Of Belgium?", "q2?", "q3?", "q4?"]
var answers = [["Antwerp", "Brussels", "Bruges", "Ghent"], ["q2A", "q2B", "q2C", "q2D"], ["q3A", "q3B", "q3C", "q3D"], ["q4A", "q4B", "q4C", "q4D"]]
var corectAnswer = ["B. Brussels", "C. q2C", "A. q3A", "D. q4D"]
var count = 0
var counter = 30
var timer;
var images = ["<img class='center-block img-right' src='assets/images/Brussels.jpg'></img>"]
var correct = 0
var incorrect = 0


function startsScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-lg btn-lg start-button' href='#' role='button'>Start Quiz</a></p>";
	$("#main").html(startScreen);
}
startsScreen()

$("body").on("click", ".start-button", function(evant){
    display()
    timerWrapper()
})

$("body").on("click", ".answer", function(evant){

    selectedAnswer = $(this).text();
    if (selectedAnswer === corectAnswer[count]) {
        correct++
        win()
        clearInterval(timer)
    } else if (selectedAnswer != corectAnswer[count])  {
        incorrect++
       loose();
       clearInterval(timer)
    } 


})




function display() {
   gameHTML= "<p class='text-center timer-p'>Time Remaining: <span id='timer'>30</span> </p><p class='text-center'>" + questions[count] + "</p><p class='first-answer answer text-center btn btn-warning btn-lg btn-block'>A. " + answers[count][0] + "</p><p class='answer text-center  btn btn-warning btn-lg btn-block'>B. "+answers[count][1]+"</p><p class='answer text-center  btn btn-warning btn-lg btn-block'>C. "+answers[count][2]+"</p><p class='answer text-center  btn btn-warning btn-lg btn-block'>D. "+answers[count][3]+"</p>";
    $("#main").html(gameHTML)
    
    
}


function timerWrapper() {
	timer = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timer);
			timeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$("#timer").html(counter);
	}
}

function win(){
    gameHTML =  "<p class='text-center'>Correct! "+ corectAnswer[count] + "</p>" + images[count];
    $("#main").html(gameHTML)
    setTimeout(between, 4000);
}

function loose() {
    gameHTML = "<p class='text-center'>Wrong! The correct answer is: "+ corectAnswer[count] + "</p>" + images[count];
    $("#main").html(gameHTML)
    setTimeout(between, 4000);

}
function timeOut() {
    gameHTML = "<p class='text-center'>Timeout! "+ corectAnswer[count] + "</p>" + images[count];
    $("#main").html(gameHTML)
    setTimeout(between, 4000);
}
function between() {
    if ( count < 4) {
    count++
    counter = 30;
    timerWrapper();
    display();

} else {
   
        end()
}

}

function end(){
    gameHTML = "<p class='text-center'>you have: " + correct + "correct answers</p>" + "<p class='text-center'>you have" + incorrect; 
    $("#main").html(gameHTML);
    

}






