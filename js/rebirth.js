document.addEventListener("DOMContentLoaded", () => {
  const doRebirthBtn = document.getElementById("do-rebirth");
  const rebirthRequired = document.getElementById("rebirth-required");
  const rebirthModal = document.getElementById("rebirth-modal");

  function updateRebirthUI(){
    rebirthRequired.textContent = Math.floor(gameState.rebirthCost);
  }
  updateRebirthUI();

  doRebirthBtn.addEventListener("click", () => {
    if(gameState.credits >= gameState.rebirthCost){
      // Reset stats
      gameState.credits = 0;
      gameState.clicks = 0;
      gameState.clickValue = 1;
      gameState.passiveIncome = 0;
      gameState.multiplier = 1;
      gameState.maxPlanets = 3;

      // Rebirth level and perks
      gameState.rebirthLevel++;
      gameState.rebirthCost *= 1.15;
      gameState.perks.clickBonus++;
      gameState.perks.passiveBonus++;
      gameState.perks.maxPlanetBonus++;

      // Respawn planets
      const gameArea = document.getElementById("game-area");
      gameArea.innerHTML = "";
      for(let i=0;i<gameState.maxPlanets + gameState.perks.maxPlanetBonus;i++){
        document.dispatchEvent(new Event("spawnPlanet"));
      }

      updateRebirthUI();
      rebirthModal.classList.remove("active");
    } else {
      alert("Not enough credits to rebirth!");
    }
  });
});
