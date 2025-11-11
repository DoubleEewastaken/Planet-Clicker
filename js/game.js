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
    planetEl.style.background = `hsl(${hue},70%,60%)`;
    planetEl.style.borderRadius = "50%";
    planetEl.style.position = "absolute";
    planetEl.style.left = Math.random()*(gameWidth-size-upgradesWidth) + "px";
    planetEl.style.top = Math.random()*(gameHeight-size) + "px";

    // Special planet
    let isGold = Math.random() < 0.1;
    let value = 4;
    if(isGold){
      planetEl.style.background = "gold";
      value *= 3;
      planetEl.dataset.special = "gold";
    }
    planetEl.dataset.value = value;

    planetEl.addEventListener("click", () => {
      gameState.clicks++;
      gameState.credits += (gameState.clickValue + gameState.perks.clickBonus) * gameState.multiplier * value;

      // Particle effect
      for(let i=0;i<10;i++){
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.background = isGold?"gold":"white";
        p.style.left = (parseInt(planetEl.style.left)+size/2)+"px";
        p.style.top = (parseInt(planetEl.style.top)+size/2)+"px";
        gameArea.appendChild(p);
        const dx = (Math.random()-0.5)*100;
        const dy = (Math.random()-0.5)*100;
        p.animate([{transform:`translate(0,0)`, opacity:1},{transform:`translate(${dx}px,${dy}px)`,opacity:0}],{duration:500});
        setTimeout(()=>p.remove(),500);
      }

      // Sound
      if(!gameState.muted){
        const audio = new Audio("assets/sounds/click.mp3");
        audio.volume = 0.3;
        audio.play();
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

  // Spawn event
  document.addEventListener('spawnPlanet', spawnPlanet);
});
