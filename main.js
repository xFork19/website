if (window.location.pathname.includes("home.html")) {
document.getElementById("equipment").addEventListener("click", () => 
{ window.location.href="equipment.html"});

document.getElementById("skill-tree").addEventListener("click", () => 
{ window.location.href="skill-tree.html"});

document.getElementById("save-slot").addEventListener("click", () => 
{ window.location.href="save-slot.html"});

document.getElementById("achievements").addEventListener("click", () => 
{ window.location.href="achievements.html"});

const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});

}



if (window.location.pathname.includes("equipment.html")) {
document.getElementById("spells").addEventListener("click", () => 
{ window.location.href="equipment.html"});

document.getElementById("weapons").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

document.getElementById("armour").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

document.getElementById("artifacts").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});
}

if (window.location.pathname.includes("save-slot.html")) {
    const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});
}
if (window.location.pathname.includes("skill-tree.html")) {
    const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});
}
if (window.location.pathname.includes("achievements.html")) {
    const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});
}





const characters = document.querySelectorAll(".character");
const speed=10;
const gravity =1;
const keys = {};

const positions = [];
const velYs = [];

const startingPositions = [
    {x:100,y:100},
    {x:500,y:400}
];

characters.forEach((character, index) => {
positions[index] = {...startingPositions[index]};
velYs[index] = 0;
});

char.style.left = positions[index].x + "px";
char.style.top = positions[index].y + "px";

if (window.location.pathname.includes("home.html")) {
x = 200;
y = 200;
floorY = window.innerHeight-5 - character.offsetHeight;
}
else if (window.location.pathname.includes("equipment.html")) {
x = 500;
y = 400;
floorY = window.innerHeight-5 - character.offsetHeight;
}

window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});
window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

function gameLoop() {
if (window.location.pathname.includes("home.html")){

  if ((keys["w"] || keys["arrowup"])&& y === floorY) {
    y -= speed;
    velY = -15;
  } else if (keys["a"] || keys["arrowleft"]) {
    x -= speed;
  } else if (keys["d"] || keys["arrowright"]) {
    x += speed;
  }

  velY+=gravity;
  y+=velY;

  if (y > floorY) {
    y = floorY;
    velY = 0;
  }

  character.style.left = `${x}px`;
  character.style.top = `${y}px`;
}
  requestAnimationFrame(gameLoop);

}
gameLoop();