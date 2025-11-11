const upgradesDiv = document.getElementById("upgrades");

const upgrades = [
  {name:"Laser Upgrade", type:"click", cost:10, effect:()=>gameState.clickValue++},
  {name:"Auto Miner", type:"passive", cost:20, effect:()=>gameState.passiveIncome++},
  {name:"Planet Multiplier", type:"multiplier", cost:50, effect:()=>gameState.multiplier*=2},
  {name:"More Planets", type:"planet", cost:100, effect:()=>gameState.maxPlanets++}
];

function createUpgradeButton(upg){
  const btn = document.createElement("button");
  btn.textContent = `${upg.name} — Cost: ${upg.cost}`;
  btn.addEventListener("click", ()=>{
    if(gameState.credits>=upg.cost){
      gameState.credits -= upg.cost;
      upg.effect();
      upg.cost = Math.floor(upg.cost*1.5);
      btn.textContent = `${upg.name} — Cost: ${upg.cost}`;
    }
  });
  upgradesDiv.appendChild(btn);
}

upgrades.forEach(u=>createUpgradeButton(u));
