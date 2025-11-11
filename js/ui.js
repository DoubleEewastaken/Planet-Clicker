document.addEventListener("DOMContentLoaded", () => {
  const rebirthBtn = document.getElementById("rebirth-btn");
  const settingsBtn = document.getElementById("settings-btn");
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const resetBtn = document.getElementById("reset-btn");

  // Mute
  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted?"🔇":"🔊";
  });

  // Ad
  adBtn.addEventListener("click", () => alert("Ad system coming soon!"));

  // Settings
  settingsBtn.addEventListener("click", () => alert("Settings coming soon!"));

  // Rebirth
  rebirthBtn.addEventListener("click", () => {
    if(gameState.credits >= gameState.rebirthCost){
      gameState.credits = 0;
      gameState.clicks = 0;
      gameState.clickValue = 1;
      gameState.passiveIncome = 0;
      gameState.multiplier = 1;
      gameState.maxPlanets = 3;
      gameState.rebirthLevel++;
      gameState.rebirthCost *= 1.15;
      gameState.perks.clickBonus++;
      gameState.perks.passiveBonus++;
      gameState.perks.maxPlanetBonus++;

      const gameArea = document.getElementById("game-area");
      gameArea.innerHTML = "";
      for(let i=0;i<gameState.maxPlanets+gameState.perks.maxPlanetBonus;i++){
        document.dispatchEvent(new Event("spawnPlanet"));
      }
      alert("Rebirth complete! Perks applied.");
    } else alert("Not enough credits to rebirth!");
  });

  // Reset
  resetBtn.addEventListener("click", () => {
    if(confirm("Reset all progress?")){
      localStorage.removeItem("spaceClickerSave");
      location.reload();
    }
  });
});
