let Wins = 0;
let loses = 0;
// const hitSound = new Audio('/sounds/swish.m4a');
const winSound = new Audio('./sounds/cash.mp3');
const lossSound = new Audio('./sounds/aww.mp3');


const handOptions = {
    "rock": "./assets/Rock.png",
    "scissors": "./assets/Scissors.png",
    "paper": "./assets/Paper.png",
}

const pickUserHand = (hand) => {
    const hands =  document.querySelector('.hands');
    hands.style.display = "none";
    let contest =  document.querySelector('.contest');
    contest.style.display = "flex";


    // pick image
    document.getElementById('humanImage').src = handOptions[hand];

   let cpHand = pickComputerHand();

   refree(hand, cpHand);
   setScore(Wins, loses);


//    Play again button
  const replay = document.querySelector('.newGame');
    replay.addEventListener('click', () => {
        contest.style.display = "none";
        hands.style.display = "flex";

    });
}


// computer choice

const pickComputerHand = () => {
    const hand = ["rock", "paper", "scissors"];
    const cpHand = hand[Math.floor(Math.random() * 3)];

    // console.log(cpHand);
    document.getElementById('computerImage').src = handOptions[cpHand];

    return cpHand;

    // setScore(Wins, loses);
}

const refree = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("You Lose!");
        loses++;
        lossSound.play();
    } if (userHand == "paper" && cpHand == "rock") {
        setDecision("You Win!");
        Wins++;
        winSound.play();
    } if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    } if (userHand == "rock" && cpHand == "scissors") {
        setDecision("You Win!");
        Wins++
        winSound.play();
    }  if (userHand == "rock" && cpHand == "paper") {
        setDecision("You Lose!");
        loses++;
        lossSound.play();
    }  if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    }  if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }  if (userHand == "scissors" && cpHand == "rock") {
        setDecision("You Lose!");
        loses++;
        lossSound.play();
    }  if (userHand == "scissors" && cpHand == "paper") {
        setDecision("You Win!");
        Wins++;
        winSound.play();
    }

}

const setScore = (wins, loses) => {
    document.querySelector('.loses h1').textContent = loses;
    document.querySelector('.wins h1').textContent = wins;
}

const setDecision = (decision) => {
    document.querySelector('.decision').textContent = decision;
}