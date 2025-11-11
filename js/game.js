document.addEventListener("DOMContentLoaded", () => {
  const gameArea = document.getElementById("game-area");
  let planets = [];

  function spawnPlanet() {
    if(planets.length >= gameState.maxPlanets + gameState.perks.maxPlanetBonus) return;

    const planetEl = document.createElement("div");
    planetEl.classList.add("planet");

    const size = 40 + Math.random() * 50;
    const hue = Math.random() * 360;
    planetEl.style.width = size + "px";
    planetEl.style.height = size + "px";
    planetEl.style.left = Math.random() * (gameArea.clientWidth - size - 10) + "px";
    planetEl.style.top = Math.random() * (gameArea.clientHeight - size - 10) + "px";

    let type = "normal";
    let value = 4;
    if(Math.random() < 0.1){ type="rare"; planetEl.style.background = "gold"; value *= 3; }
    else if(Math.random() < 0.2){ type="debris"; planetEl.style.background = "gray"; value = 1; }
    else planetEl.style.background = `hsl(${hue},70%,60%)`;

    let health = type == "normal" ? 1 : type == "rare" ? 2 : 1;
    let dx = (Math.random() - 0.5) * 0.5;
    let dy = (Math.random() - 0.5) * 0.5;

    planetEl.dataset.value = value;
    planetEl.dataset.health = health;

    function movePlanet() {
      const left = parseFloat(planetEl.style.left) + dx;
      const top = parseFloat(planetEl.style.top) + dy;
      if(left>0 && left<gameArea.clientWidth-size) planetEl.style.left = left+"px";
      if(top>0 && top<gameArea.clientHeight-size) planetEl.style.top = top+"px";
      requestAnimationFrame(movePlanet);
    }
    movePlanet();

    planetEl.addEventListener("click", () => {
      gameState.clicks++;
      gameState.credits += (gameState.clickValue + gameState.perks.clickBonus) * gameState.multiplier * value;

      let newHealth = parseInt(planetEl.dataset.health) - 1;
      if(newHealth <= 0){
        planetEl.remove();
        planets = planets.filter(p => p !== planetEl);
        spawnPlanet();
      } else planetEl.dataset.health = newHealth;

      // Particles
      for(let i=0;i<10;i++){
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = parseInt(planetEl.style.left)+size/2+"px";
        p.style.top = parseInt(planetEl.style.top)+size/2+"px";
        p.style.background = type=="rare"?"gold":type=="debris"?"gray":"white";
        gameArea.appendChild(p);
        const dx = (Math.random()-0.5)*100;
        const dy = (Math.random()-0.5)*100;
        p.animate([{transform:"translate(0,0)",opacity:1},{transform:`translate(${dx}px,${dy}px)`,opacity:0}],{duration:500});
        setTimeout(()=>p.remove(),500);
      }

      // Floating text
      const ft = document.createElement("div");
      ft.classList.add("floating-text");
      ft.textContent = "+" + ((gameState.clickValue + gameState.perks.clickBonus) * gameState.multiplier * value);
      ft.style.left = parseInt(planetEl.style.left)+size/2+"px";
      ft.style.top = parseInt(planetEl.style.top)+"px";
      gameArea.appendChild(ft);
      ft.animate([{transform:"translateY(0px)",opacity:1},{transform:"translateY(-50px)",opacity:0}],{duration:1000});
      setTimeout(()=>ft.remove(),1000);

      if(!gameState.muted){
        const audio = new Audio("assets/sounds/click.mp3");
        audio.volume = 0.3;
        audio.play();
      }
    });

    planets.push(planetEl);
    gameArea.appendChild(planetEl);
  }

  for(let i=0;i<gameState.maxPlanets;i++) spawnPlanet();
  document.addEventListener("spawnPlanet", spawnPlanet);
});
