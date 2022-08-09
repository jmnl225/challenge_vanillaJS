const getNumForm = document.getElementsByClassName("#getNum-form");
const maxNumInput = document.getElementById("maxNum"); //maxNumber to random
const myNumInput = document.getElementById("myNum");

const playBtn = document.getElementById("btn");
const result = document.getElementById("result")
const HIDDEN_CLASSNAME = "hidden"
const WINNER = "You win!!"
const LOOSER = "You lost!"

function runGame(event) {
    let maxNum = maxNumInput.value
    let myNum = myNumInput.value
    console.log(maxNum)
    console.log(myNum)
    console.log(Math.random() * 10)
    event.preventDefault();
    if (maxNum === "" || myNum === "") {
      alert("Please submit MaxNumber and your Guessing Number");
    }
    else if(parseInt(maxNum) < parseInt(myNum)){
        alert("You chose under number of the max number. Chose again!")
    } 
    else {
      const randomNum = parseInt(Math.floor(Math.random() * parseInt(maxNum)));
      let youAre;
      if(randomNum === parseInt(myNum)){
          youAre = WINNER;
      }else{
          youAre = LOOSER;
      }
      result.classList.remove(HIDDEN_CLASSNAME); 
      result.innerText = `You chose: ${myNum}, the machine chose: ${randomNum}.\n${youAre}`;
    }
}


playBtn.addEventListener("click", runGame);
