let credits = 0;
let clicks = 0;
let clickValue = 1;
let passiveIncome = 0;
let multiplier = 1;

const planet = document.getElementById("planet");
const creditDisplay = document.getElementById("credits");
const clickDisplay = document.getElementById("clicks");
const passiveDisplay = document.getElementById("passive");

// place planet in a random visible area
function randomPos() {
  const areaW = window.innerWidth - 150;
  const areaH = window.innerHeight - 150;
  const x = Math.random() * areaW;
  const y = Math.random() * areaH;
  planet.style.left = `${x}px`;
  planet.style.top = `${y}px`;
}

function spawnPlanet() {
  const size = 80 + Math.random() * 50;
  const hue = Math.random() * 360;
  planet.style.width = `${size}px`;
  planet.style.height = `${size}px`;
  planet.style.background = `radial-gradient(circle at 30% 30%, hsl(${hue}, 70%, 60%), #111)`;
  planet.style.boxShadow = `0 0 25px 5px hsl(${hue}, 80%, 50%)`;
  planet.style.opacity = 1;
  planet.style.transform = "scale(1)";
  randomPos();
}

planet.addEventListener("click", () => {
  clicks++;
  credits += clickValue * multiplier;
  creditDisplay.textContent = Math.floor(credits);
  clickDisplay.textContent = clicks;

  // explode effect
  planet.style.transform = "scale(1.5)";
  planet.style.opacity = 0;

  // after fade, respawn at new spot
  setTimeout(spawnPlanet, 200);
});

// Passive income every second
setInterval(() => {
  if (passiveIncome > 0) {
    credits += passiveIncome;
    creditDisplay.textContent = Math.floor(credits);
  }
}, 1000);

spawnPlanet();
