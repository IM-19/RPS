const handOptions = {
  rock: "../assets/icon-rock.svg",
  paper: "../assets/icon-paper.svg",
  scissors: "../assets/icon-scissors.svg",
};

const pickUserHand = (hand) => {
  console.log(hand);

  let hands = document.querySelector(".contest");
  hands.style.display = "none";
  let outcome = document.querySelector(".result");
  outcome.style.display = "flex";
  document.getElementById("userClick").src = handOptions[hand];
  var newClass = document.getElementById("styleImage");
  newClass.classList.add(hand);
  //   generateComputerHand();
  //evaluate the outcome
  let cpHand = generateComputerHand();
  console.log(cpHand);
  console.log(decideWinner(cpHand, hand));
  let result = decideWinner(cpHand, hand);
  console.log(evaluateOutcome(result));
};
let score = 0;
const startNewGame = () => {
  let hands = document.querySelector(".contest");
  hands.style.display = "flex";
  let outcome = document.querySelector(".result");
  outcome.style.display = "none";
  var newClass = document.getElementById("styleImage");
  newClass.classList.value = "image-container";
  var resetClass = document.getElementById("styleComputerImage");
  resetClass.classList.value = "image-container";
};

const generateComputerHand = () => {
  const hand = ["rock", "paper", "scissors"];
  var handPicked = hand[Math.floor(Math.random() * 3)];

  document.getElementById("computer-hand").src = handOptions[handPicked];
  var newClass = document.getElementById("styleComputerImage");

  newClass.classList.add(handPicked);
  return handPicked;
};

const decideWinner = (cpHand, userHand) => {
  let outcome = "";
  if (
    (cpHand === "rock" && userHand === "rock") ||
    (cpHand === "scissors" && userHand === "scissors") ||
    (cpHand === "paper" && userHand === "paper")
  ) {
    outcome = "draw";
  } else if (
    (cpHand === "rock" && userHand === "paper") ||
    (cpHand === "paper" && userHand === "scissors") ||
    (cpHand === "scissors" && userHand === "rock")
  ) {
    outcome = "win";
  } else if (
    (cpHand === "paper" && userHand === "rock") ||
    (cpHand === "scissors" && userHand === "paper") ||
    (cpHand === "rock" && userHand === "scissors")
  ) {
    outcome = "lose";
  }
  return outcome;
};

const evaluateOutcome = (result) => {
  if (result === "win") {
    document.getElementById("changeText").innerHTML =
      "<h1 class='matchWin'>YOU WIN</h1>";

    if (score >= 0) {
      score += 1;
      document.getElementById("score-number").innerHTML = score;
    }
  }
  if (result === "lose") {
    document.getElementById("changeText").innerHTML =
      "<h1 class='matchLoss'>YOU LOST</h1>";

    if (score > 0) {
      score -= 1;
      document.getElementById("score-number").innerHTML = score;
    }
  }
  if (result === "draw") {
    document.getElementById("changeText").innerHTML =
      "<h1 class='matchDraw'>I'TS A DRAW</h1>";

    if (score >= 0) {
      document.getElementById("score-number").innerHTML = score;
    }
  }
  return score;
};
