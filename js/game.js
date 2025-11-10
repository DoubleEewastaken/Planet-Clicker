let credits = 0;
let clickValue = 1;
let passiveIncome = 0;
let multiplier = 1;

const planet = document.getElementById("planet");
const creditDisplay = document.getElementById("credits");

function randomPos() {
  const areaW = window.innerWidth - 120;
  const areaH = window.innerHeight * 0.8 - 120;
  const x = Math.random() * areaW;
  const y = Math.random() * areaH;
  planet.style.left = `${x}px`;
  planet.style.top = `${y}px`;
}

function spawnPlanet() {
  const size = 80 + Math.random() * 40;
  planet.style.width = `${size}px`;
  planet.style.height = `${size}px`;
  planet.style.background = `radial-gradient(circle at 30% 30%, hsl(${Math.random() * 360}, 70%, 60%), #111)`;
  planet.style.boxShadow = `0 0 25px 5px hsl(${Math.random() * 360}, 80%, 50%)`;
  planet.style.opacity = 1;
  planet.style.transform = "scale(1)";
  randomPos();
}

planet.addEventListener("click", () => {
  credits += clickValue * multiplier;
  creditDisplay.textContent = Math.floor(credits);

  // planet click animation
  planet.style.transform = "scale(1.5)";
  planet.style.opacity = 0;
  setTimeout(spawnPlanet, 200);
});

// Passive income
setInterval(() => {
  if (passiveIncome > 0) {
    credits += passiveIncome;
    creditDisplay.textContent = Math.floor(credits);
  }
}, 1000);

spawnPlanet();
