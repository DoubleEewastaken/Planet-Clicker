const rebirthBtn = document.getElementById("prestige-btn");
const rebirthModal = document.getElementById("rebirth-modal");
const closeRebirth = document.getElementById("close-rebirth");
const doRebirth = document.getElementById("do-rebirth");
const rebirthRequiredSpan = document.getElementById("rebirth-required");

function updateRebirthUI(){
  rebirthRequiredSpan.textContent = Math.floor(gameState.rebirthCost);
}

rebirthBtn.addEventListener("click",()=>{
  rebirthModal.classList.add("active");
  updateRebirthUI();
});
closeRebirth.addEventListener("click",()=>rebirthModal.classList.remove("active"));

doRebirth.addEventListener("click",()=>{
  if(gameState.credits >= gameState.rebirthCost){
    gameState.credits = 0;
    gameState.clicks = 0;
    gameState.clickValue = 1;
    gameState.passiveIncome = 0;
    gameState.multiplier = 1;
    gameState.maxPlanets = 3;

    gameState.rebirthLevel++;
    gameState.rebirthCost *= 1.15;

    // apply perks
    gameState.perks.clickBonus++;
    gameState.perks.passiveBonus++;
    gameState.perks.maxPlanetBonus++;

    planets.forEach(p=>p.remove());
    planets = [];
    for(let i=0;i<gameState.maxPlanets + gameState.perks.maxPlanetBonus;i++) spawnPlanet();

    rebirthModal.classList.remove("active");
    updateRebirthUI();
  }else{
    alert("Not enough credits to rebirth!");
  }
});
