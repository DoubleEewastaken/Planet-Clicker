const planet = document.getElementById("planet");

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
  gameState.clicks++;
  gameState.credits += gameState.clickValue * gameState.multiplier;

  // click animation
  planet.style.transform = "scale(1.5)";
  planet.style.opacity = 0;

  setTimeout(spawnPlanet, 200);
});

// passive income loop
setInterval(() => {
  if (gameState.passiveIncome > 0) {
    gameState.credits += gameState.passiveIncome;
  }
}, 1000);

spawnPlanet();
