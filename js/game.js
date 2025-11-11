document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  const upgradesWidth = document.getElementById("upgrades").offsetWidth;
  const gameWidth = gameArea.clientWidth;
  const gameHeight = gameArea.clientHeight;

  let planets = [];

  function spawnPlanet() {
    if(planets.length >= gameState.maxPlanets + gameState.perks.maxPlanetBonus) return;

    const planetEl = document.createElement("div");
    planetEl.classList.add("planet");

    const size = 50 + Math.random() * 50;
    const hue = Math.random() * 360;
    planetEl.style.width = size + "px";
    planetEl.style.height = size + "px";
    planetEl.style.background = `radial-gradient(circle at 30% 30%, hsl(${hue},70%,60%), #111)`;
    planetEl.style.boxShadow = `0 0 20px 5px hsl(${hue},80%,50%)`;

    // Stay inside game area
    const x = Math.random() * (gameWidth - size - upgradesWidth);
    const y = Math.random() * (gameHeight - size);
    planetEl.style.left = x + "px";
    planetEl.style.top = y + "px";

    // Special planet type
    let isGold = Math.random() < 0.1;
    let value = Math.ceil(size / 20);
    if(isGold){
      planetEl.style.background = "gold";
      value *= 3;
      planetEl.dataset.special = "gold";
    }

    planetEl.dataset.value = value;

    planetEl.addEventListener("click", () => {
      gameState.clicks++;
      gameState.credits += (gameState.clickValue + gameState.perks.clickBonus) * gameState.multiplier * value;

      // Sound
      if(!gameState.muted){
        const audio = new Audio("assets/sounds/click.mp3");
        audio.volume = 0.3;
        audio.play();
      }

      // Particle effect
      for(let i=0;i<10;i++){
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.background = isGold?"gold":"white";
        p.style.left = (x + size/2) + "px";
        p.style.top = (y + size/2) + "px";
        gameArea.appendChild(p);

        const dx = (Math.random()-0.5)*100;
        const dy = (Math.random()-0.5)*100;
        p.animate([
          {transform: `translate(0px,0px)`, opacity:1},
          {transform: `translate(${dx}px,${dy}px)`, opacity:0}
        ], {duration:500});
        setTimeout(()=>p.remove(),500);
      }

      planetEl.remove();
      planets = planets.filter(p=>p!==planetEl);
      spawnPlanet();
    });

    planets.push(planetEl);
    gameArea.appendChild(planetEl);
  }

  // Initial planets
  for(let i=0;i<gameState.maxPlanets;i++) spawnPlanet();

  // Listen for external spawn events (used in rebirth)
  document.addEventListener('spawnPlanet', spawnPlanet);
});
