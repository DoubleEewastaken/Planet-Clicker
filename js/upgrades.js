document.addEventListener("DOMContentLoaded", () => {
  const upgradesDiv = document.getElementById("upgrades");
  const upgrades = [
    {name:"Laser Upgrade", type:"click", cost:10, effect:()=>gameState.clickValue++},
    {name:"Auto Miner", type:"passive", cost:20, effect:()=>gameState.passiveIncome++},
    {name:"Planet Multiplier", type:"multiplier", cost:50, effect:()=>gameState.multiplier*=2},
    {name:"More Planets", type:"planet", cost:100, effect:()=>gameState.maxPlanets++}
  ];

  upgrades.forEach(u => {
    const btn = document.createElement("button");
    btn.textContent = `${u.name} — Cost: ${u.cost}`;
    btn.addEventListener("click", () => {
      if(gameState.credits >= u.cost){
        gameState.credits -= u.cost;
        u.effect();
        u.cost = Math.floor(u.cost * 1.5);
        btn.textContent = `${u.name} — Cost: ${u.cost}`;
      }
    });
    upgradesDiv.appendChild(btn);
  });
});
