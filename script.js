function makebubble() {
  var clutter = "";

  for (i = 1; i <= 75; i++) {
    var rm = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rm}</div>`;
  }

  document.querySelector("#panelbtm").innerHTML = clutter;
}

var timer = 60;
function runtimer() {
  var timerinner = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#panelbtm").innerHTML = `<h1>Game Over</h1>`;
      clearInterval(timerinner);
    }
  }, 1000);
}
var hitnum = 0;
function gethit() {
  hitnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitnum;
}

var score = 0;
function increasescore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#panelbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitnum) {
    increasescore();
    gethit();
    makebubble();
  }
});

// increasescore();
gethit();
runtimer();
makebubble();
