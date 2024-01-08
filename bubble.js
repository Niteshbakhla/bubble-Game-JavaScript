let clutter = " ";
function makeBubble() {
  for (i = 1; i <= 152; i++) {
    let rn = Math.floor(Math.random() * 10 + 1)
    clutter += `<div class="bubble">${rn}</div>`;
    document.querySelector(".bubbleBoard").innerHTML = clutter;
  }
}
let timer = 2;
function runTimer() {
  let timerTimer = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector('#timeVal').innerHTML = timer;
    } else {
      clearInterval(timerTimer)
      document.querySelector(".bubbleBoard").innerHTML = `<h1 class="h1">GAME OVER!</h1>`;
    }
  }, 1000);
}

let score = 0;

function newScore() {
  score += 10;
  document.querySelector("#scoreVal").innerHTML = score;
}
let hitNew;
function newHit() {
  hitNew = Math.floor(Math.random() * 10 + 1)
  document.querySelector("#hitVal").innerHTML = hitNew;
}


document.querySelector(".bubbleBoard")
  .addEventListener("click", (dets) => {
    clickedNumber = Number(dets.target.textContent);

    if (clickedNumber === hitNew) {
      newScore();
      newHit();
      makeBubble();
    }
  })





newHit();
runTimer();
makeBubble();