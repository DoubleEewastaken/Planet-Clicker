document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  let planets = [];

  function spawnPlanet() {
    if(planets.length >= gameState.maxPlanets + gameState.perks.maxPlanetBonus) return;

    const planetEl = document.createElement("div");
    planetEl.classList.add("planet");

    const size = 50 + Math.random()*50;
    const hue = Math.random()*360;
    planetEl.style.width = size + "px";
    planetEl.style.height = size + "px";
    planetEl.style.background = `radial-gradient(circle at 30% 30%, hsl(${hue},70%,60%), #111)`;
    planetEl.style.boxShadow = `0 0 20px 5px hsl(${hue},80%,50%)`;

    const x = Math.random()*(gameArea.clientWidth - size);
    const y = Math.random()*(gameArea.clientHeight - size);
    planetEl.style.left = x + "px";
    planetEl.style.top = y + "px";

    const value = Math.ceil(size / 20);
    planetEl.dataset.value = value;

    planetEl.addEventListener("click", () => {
      gameState.clicks++;
      gameState.credits += (gameState.clickValue + gameState.perks.clickBonus) * gameState.multiplier * value;
      planetEl.remove();
      planets = planets.filter(p=>p!==planetEl);
      spawnPlanet();
    });

    planets.push(planetEl);
    gameArea.appendChild(planetEl);
  }

  // Initial planets
  for(let i=0;i<gameState.maxPlanets;i++) spawnPlanet();
});
