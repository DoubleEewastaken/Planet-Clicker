document.addEventListener("DOMContentLoaded", () => {
  const doRebirthBtn = document.getElementById("do-rebirth");
  const rebirthRequiredSpan = document.getElementById("rebirth-required");

  function updateRebirthUI(){
    rebirthRequiredSpan.textContent = Math.floor(gameState.rebirthCost);
  }

  updateRebirthUI();

  doRebirthBtn.addEventListener("click", ()=>{
    if(gameState.credits >= gameState.rebirthCost){
      // Reset game values
      gameState.credits = 0;
      gameState.clicks = 0;
      gameState.clickValue = 1;
      gameState.passiveIncome = 0;
      gameState.multiplier = 1;
      gameState.maxPlanets = 3;

      // Increase rebirth
      gameState.rebirthLevel++;
      gameState.rebirthCost *= 1.15;

      // Apply perks
      gameState.perks.clickBonus++;
      gameState.perks.passiveBonus++;
      gameState.perks.maxPlanetBonus++;

      // Respawn planets
      const gameArea = document.getElementById("game-area");
      gameArea.innerHTML = "";
      for(let i=0;i<gameState.maxPlanets + gameState.perks.maxPlanetBonus;i++){
        const evt = new Event('spawnPlanet'); 
        document.dispatchEvent(evt);
      }

      updateRebirthUI();
      document.getElementById("rebirth-modal").classList.remove("active");
    }else{
      alert("Not enough credits to rebirth!");
    }
  });
});
