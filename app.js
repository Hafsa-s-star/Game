alert("Press these keys for Ken: V, Z, E");
alert("Press these keys for Chun-Li: Left Arrow, Right Arrow, Spacebar");

var character1 = document.getElementById('char1'); // Ken
var character2 = document.getElementById('char2'); // Chun-Li

var left1 = 50;  // Ken position
var right2 = 50; // Chun-Li position

document.addEventListener('keydown', function (event) {
  console.log("Key pressed:", event.key);

  // === KEN (Character 1) ===
  if (event.key === "v" || event.key === "V") {
    character1.src = "./images/walk.gif"; // Move forward
    left1 += 20;
    character1.style.left = left1 + "px";
    setTimeout(function () {
      character1.src = "./images/character 2.gif";
      character1.style.height = "250px";
    }, 1000);
  }

  if (event.key === "z" || event.key === "Z") {
    character1.src = "./images/punch1.gif"; // Punch
    left1 -= 20;
    character1.style.left = left1 + "px";
    setTimeout(function () {
      character1.src = "./images/character 2.gif";
      character1.style.height = "250px";
    }, 1000);
  }

  if (event.key === "e" || event.key === "E") {
    character1.src = "./images/kick1.gif"; // Kick
    character1.style.height = "300px";
    setTimeout(function () {
      character1.src = "./images/character 2.gif";
      character1.style.height = "250px";
    }, 1500);
  }

  // === CHUN-LI (Character 2) ===
  if (event.keyCode === 37) { // Left arrow
    character2.src = "./images/punch2.gif"; // Punch
    right2 += 20;
    character2.style.right = right2 + "px";
    setTimeout(function () {
      character2.src = "./images/character 1.gif";
      character2.style.height = "250px";
    }, 1000);
  }

  if (event.keyCode === 39) { // Right arrow
    character2.src = "./images/walk2.gif"; // Walk
    right2 -= 20;
    character2.style.right = right2 + "px";
    setTimeout(function () {
      character2.src = "./images/character 1.gif";
      character2.style.height = "250px";
    }, 1000);
  }

  if (event.keyCode === 32) { // Spacebar
    character2.src = "./images/kicks.gif"; // Kick
    character2.style.height = "300px";
    setTimeout(function () {
      character2.src = "./images/character 1.gif";
      character2.style.height = "250px";
    }, 1500);
  }
});
