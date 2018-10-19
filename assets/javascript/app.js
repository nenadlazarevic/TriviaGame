var questions = ["What Is the Capital Of Belgium?", "What Is the Capital Of Italy?", "What Is the Capital Of Germany?", "What Is the Capital Of Finland?", "What Is the Capital Of Serbia?", "What Is the Capital Of Poland", "What Is the Capital Of Estonia"]
var answers = [["Antwerp", "Brussels", "Bruges", "Ghent"], ["Milan", "Vatican", "Rome", "Florence"], ["Berlin", "Hamburg", "Frankfurt", "Stuttgart"], ["Tampere", "Turku", "Oulu", "Helsinki"], ["Vienna", "Zagreb", "Sarajevo", "Belgrade"], ["Krakow", "Warsaw", "Gdansk", "Katowice"], ["Narva", "Tartu", "Tallinn", "Elva"]]
var corectAnswer = ["B. Brussels", "C. Rome", "A. Berlin", "D. Helsinki", "D. Belgrade", "B. Warsaw", "C. Tallinn"]
var count = 0
var counter = 30
var timer;
var images = ["<img class='center-block img-right' src='assets/images/Brussels.jpg'></img>", "<img class='center-block img-right' src='assets/images/Rome.jpg'></img>", "<img class='center-block img-right' src='assets/images/Berlin.jpg'></img>", "<img class='center-block img-right' src='assets/images/Helsinki.jpg'></img>","<img class='center-block img-right' src='assets/images/Belgrade.jpg'></img>", "<img class='center-block img-right' src='assets/images/Warsaw.jpg'></img>", "<img class='center-block img-right' src='assets/images/Tallinn.jpg'></img>"]
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
    gameHTML = "<p id=wrong class='text-center'>Wrong!</p><p class='text-center'> The correct answer is: "+ corectAnswer[count] + "</p>" + images[count];
    $("#main").html(gameHTML)
    setTimeout(between, 4000);

}
function timeOut() {
    incorrect++
    gameHTML = "<p class='text-center'>Timeout!</p><p class='text-center'> The Correct Answer is</p><p class='text-center'>" + corectAnswer[count] + "</p>" + images[count];
    $("#main").html(gameHTML)
    setTimeout(between, 4000);
}
function between() {
    if ( count < 6) {
    count++
    counter = 30;
    timerWrapper();
    display();

} else {
   
        end()
}

}

function end(){
    gameHTML = "<p id=end class='text-center'>Correct Answers: " + correct + "</p>" + "<p id=endWrong class='text-center'>Wrong Answers: " + incorrect; 
    $("#main").html(gameHTML);
    

}






