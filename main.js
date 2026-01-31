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
const Images = [
    "Pink-Images/IMG_5379.JPEG",
    "Pink-Images/IMG_6531.JPEG",
    "Pink-Images/IMG_6532.JPEG",
    "Pink-Images/IMG_6572.JPEG",
    "Pink-Images/IMG_6578.JPEG",
    "Pink-Images/IMG_6706.JPEG",
    "Pink-Images/IMG_6707.JPEG",
    "Pink-Images/IMG_6752.JPEG",
    "Pink-Images/IMG_6755.JPEG",
    "Pink-Images/IMG_6763.JPEG",
    "Pink-Images/IMG_7002.JPEG",
    "Pink-Images/IMG_7006.JPEG",
    "Pink-Images/IMG_7154.JPEG",
    "Pink-Images/IMG_7155.JPEG",
    "Pink-Images/IMG_7783.JPEG",
    "Pink-Images/IMG_8037.JPEG",
    "Pink-Images/IMG_8084.JPEG",
    "Pink-Images/IMG_8092.JPEG",
    "Pink-Images/IMG_8160.JPEG",
    "Pink-Images/IMG_8161.JPEG",
    "Pink-Images/IMG_8533.JPEG",
 	"Orange-Images/IMG_0426.JPEG", 
	"Orange-Images/IMG_2344.JPEG", 
	"Orange-Images/IMG_2345.JPEG", 
	"Orange-Images/IMG_4138.JPEG", 
	"Orange-Images/IMG_4139.JPEG", 
	"Orange-Images/IMG_4625.JPEG", 
	"Orange-Images/IMG_4626.JPEG", 
	"Orange-Images/IMG_4874.JPEG",
    "Orange-Images/IMG_4875.JPEG",
    "Orange-Images/IMG_5538.JPEG",
    "Orange-Images/IMG_5539.JPEG",
    "Orange-Images/IMG_5540.JPEG",
    "Orange-Images/IMG_5541.JPEG",
    "Orange-Images/IMG_5542.JPEG",
    "Orange-Images/IMG_5543.JPEG",
    "Orange-Images/IMG_5545.JPEG",
    "Orange-Images/IMG_5546.JPEG",
    "Orange-Images/IMG_6561.JPEG",
    "Orange-Images/IMG_6774.JPEG",
    "Orange-Images/IMG_6775.JPEG",
    "Orange-Images/IMG_6776.JPEG",
    "Orange-Images/IMG_6782.JPEG",
    "Orange-Images/IMG_6783.JPEG",
    "Orange-Images/IMG_6784.JPEG",
    "Orange-Images/IMG_6787.JPEG",
    "Orange-Images/IMG_6788.JPEG",
    "Orange-Images/IMG_6789.JPEG",
    "Orange-Images/IMG_6793.JPEG",
    "Orange-Images/IMG_6794.JPEG",
    "Orange-Images/IMG_6796.JPEG",
    "Orange-Images/IMG_6797.JPEG",
    "Orange-Images/IMG_6849.JPEG",
    "Orange-Images/IMG_7133.JPEG",
    "Orange-Images/IMG_7134.JPEG",
    "Orange-Images/IMG_7157.JPEG",
    "Orange-Images/IMG_7492.JPEG",
    "Orange-Images/IMG_7493.JPEG",
    "Orange-Images/IMG_7494.JPEG",
    "Orange-Images/IMG_7495.JPEG",
    "Orange-Images/IMG_7524.JPEG",
    "Orange-Images/IMG_7576.JPEG",
    "Orange-Images/IMG_7587.JPEG",
    "Orange-Images/IMG_7588.JPEG",
    "Orange-Images/IMG_7799.JPEG",
    "Orange-Images/IMG_7801.JPEG",
    "Orange-Images/IMG_7972.JPEG",
    "Orange-Images/IMG_7973.JPEG",
    "Orange-Images/IMG_8022.JPEG",
    "Orange-Images/IMG_8023.JPEG",
    "Orange-Images/IMG_8024.JPEG",
    "Orange-Images/IMG_8102.JPEG",
    "Orange-Images/IMG_8534.JPEG",
    "Orange-Images/IMG_8760.JPEG",
    "Orange-Images/IMG_8761.JPEG",
    "Orange-Images/IMG_8762.JPEG",
    "Orange-Images/IMG_8766.JPEG",
    "Yellow-Images/IMG_0223.JPEG",
    "Yellow-Images/IMG_0279.JPEG",
    "Yellow-Images/IMG_0281.JPEG",
    "Yellow-Images/IMG_0282.JPEG",
    "Yellow-Images/IMG_2877.JPEG",
    "Yellow-Images/IMG_2878.JPEG",
    "Yellow-Images/IMG_3655.JPEG",
    "Yellow-Images/IMG_3656.JPEG",
    "Yellow-Images/IMG_3658.JPEG",
    "Yellow-Images/IMG_4138.JPEG",
    "Yellow-Images/IMG_4139.JPEG",
    "Yellow-Images/IMG_4169.JPEG",
    "Yellow-Images/IMG_4170.JPEG",
    "Yellow-Images/IMG_4873.JPEG",
    "Yellow-Images/IMG_4879.JPEG",
    "Yellow-Images/IMG_4883.JPEG",
    "Yellow-Images/IMG_4884.JPEG",
    "Yellow-Images/IMG_5538.JPEG",
    "Yellow-Images/IMG_5539.JPEG",
    "Yellow-Images/IMG_6559.JPEG",
    "Yellow-Images/IMG_6561.JPEG",
    "Yellow-Images/IMG_6728.JPEG",
    "Yellow-Images/IMG_6731.JPEG",
    "Yellow-Images/IMG_6732.JPEG",
    "Yellow-Images/IMG_6733.JPEG",
    "Yellow-Images/IMG_6734.JPEG",
    "Yellow-Images/IMG_6753.JPEG",
    "Yellow-Images/IMG_6754.JPEG",
    "Yellow-Images/IMG_6755.JPEG",
    "Yellow-Images/IMG_6756.JPEG",
    "Yellow-Images/IMG_6763.JPEG",
    "Yellow-Images/IMG_6766.JPEG",
    "Yellow-Images/IMG_6773.JPEG",
    "Yellow-Images/IMG_6777.JPEG",
    "Yellow-Images/IMG_6800.JPEG",
    "Yellow-Images/IMG_6848.JPEG",
    "Yellow-Images/IMG_6996.JPEG",
    "Yellow-Images/IMG_7001.JPEG",
    "Yellow-Images/IMG_7088.JPEG",
    "Yellow-Images/IMG_7089.JPEG",
    "Yellow-Images/IMG_7110.JPEG",
    "Yellow-Images/IMG_7113.JPEG",
    "Yellow-Images/IMG_7578.JPEG",
    "Yellow-Images/IMG_7579.JPEG",
    "Yellow-Images/IMG_7613.JPEG",
    "Yellow-Images/IMG_7614.JPG",
    "Yellow-Images/IMG_7789.JPEG",
    "Yellow-Images/IMG_7977.JPEG",
    "Yellow-Images/IMG_7992.JPG",
    "Yellow-Images/IMG_8009.JPEG",
    "Yellow-Images/IMG_8010.JPEG",
    "Yellow-Images/IMG_8011.JPEG",
    "Yellow-Images/IMG_8012.JPEG",
    "Yellow-Images/IMG_8098.JPEG",
    "Yellow-Images/IMG_8758.JPEG",
    "Yellow-Images/IMG_8759.JPEG",
    "Green-Images/IMG_0031.JPEG",
    "Green-Images/IMG_0042.JPEG",
    "Green-Images/IMG_0148.JPEG",
    "Green-Images/IMG_0207.JPEG",
    "Green-Images/IMG_0208.JPEG",
    "Green-Images/IMG_0232.JPEG",
    "Green-Images/IMG_0233.JPEG",
    "Green-Images/IMG_0234.JPEG",
    "Green-Images/IMG_0235.JPEG",
    "Green-Images/IMG_0237.JPEG",
    "Green-Images/IMG_0239.JPEG",
    "Green-Images/IMG_0242.JPEG",
    "Green-Images/IMG_0243.JPEG",
    "Green-Images/IMG_0246.JPEG",
    "Green-Images/IMG_0256.JPEG",
    "Green-Images/IMG_0257.JPEG",
    "Green-Images/IMG_0258.JPEG",
    "Green-Images/IMG_0259.JPEG",
    "Green-Images/IMG_0260.JPEG",
    "Green-Images/IMG_0269.JPEG",
    "Green-Images/IMG_0270.JPEG",
    "Green-Images/IMG_0271.JPEG",
    "Green-Images/IMG_0272.JPEG",
    "Green-Images/IMG_0274.JPEG",
    "Green-Images/IMG_0280.JPEG",
    "Green-Images/IMG_0358.JPEG",
    "Green-Images/IMG_0359.JPEG",
    "Green-Images/IMG_0360.JPEG",
    "Green-Images/IMG_0361.JPEG",
    "Green-Images/IMG_0362.JPEG",
    "Green-Images/IMG_0367.JPEG",
    "Green-Images/IMG_0368.JPEG",
    "Green-Images/IMG_0369.JPEG",
    "Green-Images/IMG_0374.JPEG",
    "Green-Images/IMG_0378.JPEG",
    "Green-Images/IMG_0381.JPEG",
    "Green-Images/IMG_0382.JPEG",
    "Green-Images/IMG_0383.JPEG",
    "Green-Images/IMG_0384.JPEG",
    "Green-Images/IMG_0414.JPEG",
    "Green-Images/IMG_0420.JPEG",
    "Green-Images/IMG_0431.JPEG",
    "Green-Images/IMG_0440.JPEG",
    "Green-Images/IMG_0449.JPEG",
    "Green-Images/IMG_0450.JPEG",
    "Green-Images/IMG_0454.JPEG",
    "Green-Images/IMG_0455.JPEG",
    "Green-Images/IMG_0460.JPEG",
    "Green-Images/IMG_0469.JPEG",
    "Green-Images/IMG_0470.JPEG",
    "Green-Images/IMG_0472.JPEG",
    "Green-Images/IMG_0479.JPEG",
    "Green-Images/IMG_0481.JPEG",
    "Green-Images/IMG_0482.JPEG",
    "Green-Images/IMG_0484.JPEG",
    "Green-Images/IMG_0487.JPEG",
    "Green-Images/IMG_0488.JPEG",
    "Green-Images/IMG_0497.JPEG",
    "Green-Images/IMG_0499.JPEG",
    "Green-Images/IMG_0509.JPEG",
    "Green-Images/IMG_0510.JPEG",
    "Green-Images/IMG_0511.JPEG",
    "Green-Images/IMG_0524.JPEG",
    "Green-Images/IMG_0525.JPEG",
    "Green-Images/IMG_0526.JPEG",
    "Green-Images/IMG_0528.JPEG",
    "Green-Images/IMG_0529.JPEG",
    "Green-Images/IMG_0533.JPEG",
    "Green-Images/IMG_0534.JPEG",
    "Green-Images/IMG_0536.JPEG",
    "Green-Images/IMG_0537.JPEG",
    "Green-Images/IMG_0538.JPEG",
    "Green-Images/IMG_0539.JPEG",
    "Green-Images/IMG_0540.JPEG",
    "Green-Images/IMG_0541.JPEG",

];
const con = document.getElementById("save-slot-container");
Images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "sun";
    con.appendChild(img);
});