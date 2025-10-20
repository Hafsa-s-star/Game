 var character1 = document.getElementById('char1');
var character2 = document.getElementById('char2');

var left1 = 50;  // Character 1 position
var right2 = 50; // Character 2 position

document.addEventListener('keydown', function(event) {
  console.log("Key pressed:", event.key);

  // === CHARACTER 1 (Left side) ===
  if (event.key === "v" || event.key === "V") {
    character1.src = "./images/walk.gif";
    left1 += 20;
    character1.style.left = left1 + "px";
  }

  if (event.key === "z" || event.key === "Z") {
    character1.src = "./images/run.gif";
    left1 -= 20;
    character1.style.left = left1 + "px";
  }

  if (event.key === "d" || event.key === "D") {
    character1.src = "./images/yay.gif";
    character1.style.height = "300px";
    setTimeout(function() {
      character1.src = "./images/character 2.gif";
      character1.style.height = "250px";
    }, 1000);
  }

  // === CHARACTER 2 (Right side) ===
  if (event.keyCode === 37) { // Left arrow
    character2.src = "./images/vblock.gif";
    right2 += 20;
    character2.style.right = right2 + "px";
  }

  if (event.keyCode === 39) { // Right arrow
    character2.src = "./images/walk2.gif";
    right2 -= 20;
    character2.style.right = right2 + "px";
  }

  if (event.keyCode === 32) { // Spacebar
    character2.src = "./images/kicks.gif";
    character2.style.height = "300px";
    setTimeout(function() {
      character2.src = "./images/character 1.gif";
      character2.style.height = "250px";
    }, 1000);
  }
});
