


document.getElementById("equipment").addEventListener("click", () => 
{ window.location.href="equipment.html"});

document.getElementById("skill-tree").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

document.getElementById("save-slot").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

document.getElementById("achievements").addEventListener("click", () => 
{ window.location.href="portfolio.html"});

const exitButtons = document.getElementsByClassName("exit-btn");
Array.from(exitButtons).forEach(btn => 
{btn.addEventListener("click", () => 
{ window.location.href="home.html"});});
