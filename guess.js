const btnOpenModal = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close");
const overlayEffect = document.querySelector(".overlay");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// const displayNumber = function (number) {
//   document.querySelector(".number").textContent = number;
// };

secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".go").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  console.log(guessNumber);

  if (guessNumber === secretNumber) {
    document.querySelector(".win-loose").textContent = "You Won the Game!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".win-header").style.backgroundColor = "#60b347";
    document.querySelector(".win-section").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "250px";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".prize").textContent = highscore;
    }
  }

  if (guessNumber < secretNumber && score > 1) {
    document.querySelector(".win-loose").textContent = "Too low!";
    score--;
    document.querySelector(".play-point").textContent = score;
  } else if (score === 1) {
    document.querySelector(".win-loose").textContent = "You lost the Game!";
    document.querySelector(".play-point").textContent = 0;
  }

  if (guessNumber > secretNumber && score > 1) {
    document.querySelector(".win-loose").textContent = "Too high!";
    score--;
    document.querySelector(".play-point").textContent = score;
  } else if (score === 1) {
    document.querySelector(".win-loose").textContent = "You lost the Game!";
    document.querySelector(".play-point").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".play-point").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".win-loose").textContent = "Try to win the Game!";
  document.querySelector(".win-header").style.backgroundColor = "#444";
  document.querySelector(".win-section").style.backgroundColor = "#000";
  document.querySelector(".number").style.width = "150px";
});

const showClass = function () {
  modal.classList.remove("hidden");
  overlayEffect.classList.remove("hidden");
};

const hideClass = function () {
  modal.classList.add("hidden");
  overlayEffect.classList.add("hidden");
};

document.querySelector(".open-modal").addEventListener("click", showClass);

document.querySelector(".close").addEventListener("click", hideClass);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) hideClass();
});

document.querySelector(".overlay").addEventListener("click", function () {
  if (!overlayEffect.classList.contains("hidden")) hideClass();
});
