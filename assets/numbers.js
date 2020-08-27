
var horses = document.querySelectorAll(".horse")
var numberOfHorses = getRandomInt(22);
var pickedNumber = Number(numberOfHorses)
var optionA = Number(pickedNumber + 2)
var optionB = Number(pickedNumber - 1)
var guessA = document.querySelector("#guessA")
var guessB = document.querySelector("#guessB")
var guessC = document.querySelector("#guessC")
var square = document.querySelectorAll(".square")
var guess = document.querySelectorAll(".guess")

function setSquares(){
	for(var i = 0; i < square.length; i++){
		square[i].addEventListener("click", function(){
			var clickedNumber = Number(this.innerText)
			if(clickedNumber === pickedNumber){
				// console.log(this)
				this.classList.add("correct")
			} else {
				this.classList.add("wrong")
			}
		})
	}
}


function setOptions(){
	guessA.innerText = optionA
	guessB.innerText = pickedNumber
	guessC.innerText = optionB
}


function init(){
    hideOrShowHorses(numberOfHorses);
    setGuessingAlternatives(numberOfHorses)
    setOptions();
    setSquares();
}

function hideOrShowHorses(numberOfHorses){
    console.log("will display", numberOfHorses, "horses")
    var horses = document.querySelectorAll(".horse")

    for (var i = 0; i < horses.length; i++){
        if (i < numberOfHorses){
            horses[i].classList.remove("hidden")
        } else {
            horses[i].classList.add("hidden")
        }
    }
}     

function setGuessingAlternatives(numberOfHorses) {
        /* TBI */
    var optionA = (numberOfHorses + 2)
    var optionB = (numberOfHorses - 1)
}     

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
}

   
    



    init()