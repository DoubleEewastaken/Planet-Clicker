document.addEventListener("DOMContentLoaded", () => {
  const upgradesDiv = document.getElementById("upgrades");

  const upgrades = [
    {name:"Laser Upgrade", type:"click", cost:10, effect:()=>gameState.clickValue++},
    {name:"Auto Miner", type:"passive", cost:20, effect:()=>gameState.passiveIncome++},
    {name:"Planet Multiplier", type:"multiplier", cost:50, effect:()=>gameState.multiplier*=2},
    {name:"More Planets", type:"planet", cost:100, effect:()=>gameState.maxPlanets++},
    {name:"Rare Planet Chance", type:"special", cost:200, effect:()=>console.log("Rare chance boost")}, // placeholder
    {name:"Bonus Click", type:"click", cost:150, effect:()=>gameState.perks.clickBonus++},
    {name:"Bonus Passive", type:"passive", cost:150, effect:()=>gameState.perks.passiveBonus++},
    {name:"Max Planets Boost", type:"planet", cost:300, effect:()=>gameState.perks.maxPlanetBonus++},
    {name:"Auto-Laser", type:"auto", cost:500, effect:()=>console.log("Auto-laser enabled")}, // placeholder
    {name:"Auto-Miner", type:"auto", cost:500, effect:()=>console.log("Auto-miner enabled")}
  ];

  upgrades.forEach(u=>{
    const btn = document.createElement("button");
    btn.textContent = `${u.name} — Cost: ${u.cost}`;
    btn.addEventListener("click", ()=>{
      if(gameState.credits >= u.cost){
        gameState.credits -= u.cost;
        u.effect();
        u.cost = Math.floor(u.cost*1.5);
        btn.textContent = `${u.name} — Cost: ${u.cost}`;
      }
    });
    upgradesDiv.appendChild(btn);
  });
});
