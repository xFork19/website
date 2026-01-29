

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