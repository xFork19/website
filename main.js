const saveSlotContainer = document.getElementById("save-slot-container");


if (window.location.pathname.includes("home.html")) {
document.getElementById("equipment").addEventListener("click", () => 
{ 
    document.getElementById("equipment-container").style.display="block";
    document.getElementById("home-containter").style.display="none";
});

document.getElementById("skill-tree").addEventListener("click", () => 
{ 
    document.getElementById("skill-tree-container").style.display="block";
    document.getElementById("home-containter").style.display="none";
});

document.getElementById("save-slot").addEventListener("click", () => 
{ 
    document.getElementById("save-slot-container").style.display="block";
    document.getElementById("home-containter").style.display="none";
    saveSlotContainer.style.width="1000px";
    saveSlotContainer.style.height="700px";

});

document.getElementById("achievements").addEventListener("click", () => 
{ 
    document.getElementById("achievements-container").style.display="block";
    document.getElementById("home-containter").style.display="none";
});

const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{
    document.getElementById("achievements-container").style.display="none";
    document.getElementById("skill-tree-container").style.display="none";
    document.getElementById("save-slot-container").style.display="none";
    document.getElementById("equipment-container").style.display="none";
    document.getElementById("home-containter").style.display="block";
});});

}

const player = document.getElementById("spotify-player");
let isDragging = false;
let offSetX = 0;
let offSetY = 0;

player.addEventListener("mousedown", (e) => {
isDragging = true;
offSetX = e.clientX - player.getBoundingClientRect().left;
offSetY = e.clientY - player.getBoundingClientRect().top;
player.style.cursor = "grabbing";
});
window.addEventListener("mouseup", () => {
isDragging = false;
player.style.cursor = "grab";
});
window.addEventListener("mousemove", (e) => {
if (!isDragging) return;
let left = e.clientX - offSetX;
let top = e.clientY - offSetY;

left = Math.max(0,Math.min(window.innerWidth - player.offsetWidth, left));
top = Math.max(0,Math.min(window.innerHeight - player.offsetHeight, top));

player.style.left = left + "px";
player.style.top = top + "px";
});


const character = document.getElementById("character");
const speed=10;
const keys = {};
let x, y, floorY;
const gravity =1;
let velY = 0;
x = 200;
y = 200;
if (window.location.pathname.includes("home.html")) {
floorY = window.innerHeight-5 - character.offsetHeight;
}
else if (window.location.pathname.includes("equipment.html")) {
const container = document.querySelector(".container");
floorY = container.offsetHeight-5 - character.offsetHeight;
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

}
if (window.location.pathname.includes("equipment.html")){
    if ((keys["w"] || keys["arrowup"])&& y === floorY) {
    y -= speed;
    velY = -15;
  } else if (keys["a"] || keys["arrowleft"]) {
    x -= speed;
  } else if (keys["d"] || keys["arrowright"]) {
    x += speed;
  }
}

  velY+=gravity;
  y+=velY;

  if (y > floorY) {
    y = floorY;
    velY = 0;
  }

  character.style.left = `${x}px`;
  character.style.top = `${y}px`;
requestAnimationFrame(gameLoop);
}
gameLoop();