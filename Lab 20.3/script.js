"use strict";
// Xử lý Click Events
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
displayScore("0");
displayNumber("?");
document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(
      document.querySelector(".guess").value
    );
    if (!guess) {
      //not is nomber
      // document.querySelector(".message").textContent =
      //   "No Number!";
      displayMessage("No Number!");
    } else if (guess === secretNumber) {
      //correct number
      // document.querySelector(".message").textContent =
      //   "Correct Number";
      displayMessage("Correct Number");
      document.querySelector("body").style.backgroundColor =
        "#60b347";

      document.querySelector(".number").style.width =
        "30rem";
      displayNumber(secretNumber);
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent =
          highscore;
      }
    } else if (guess !== secretNumber) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "Too High" : "Too Low";
      // score -= 1;
      displayScore(score);
      if (score > 1) {
        displayMessage(
          guess > secretNumber ? "Too High" : "Too Low"
        );
        score -= 1;
      } else {
        displayMessage("You Lost The Game");

        displayScore(0);
      }
    }
  });

//   else if (guess > secretNumber) {
//     //when guess it too high
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         "Too High";
//       score -= 1;
//       document.querySelector(".score").textContent =
//         score;
//     } else {
//       document.querySelector(".message").textContent =
//         "You Lost The Game";
//       document.querySelector(".score").textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     //when guess it too low
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         "Too Low";
//       score -= 1;
//       document.querySelector(".score").textContent =
//         score;
//     } else {
//       document.querySelector(".message").textContent =
//         "You Lost The Game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    displayScore(0);

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector("body").style.backgroundColor =
      "#222";

    document.querySelector(".number").style.width = "15rem";
    displayNumber("?");
    document.querySelector(".guess").value = "";
  });
