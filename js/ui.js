document.addEventListener("DOMContentLoaded", () => {
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");
  const settingsBtn = document.getElementById("settings-btn");

  const settingsModal = document.getElementById("settings-modal");
  const closeSettings = document.getElementById("close-settings");
  const rebirthModal = document.getElementById("rebirth-modal");
  const closeRebirth = document.getElementById("close-rebirth");
document.addEventListener("DOMContentLoaded", () => {
  const resetBtn = document.getElementById("reset-btn");

  resetBtn.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset all progress?")) {
      // Clear local storage
      localStorage.removeItem("spaceClickerSave");

      // Reset gameState
      gameState.credits = 0;
      gameState.clicks = 0;
      gameState.clickValue = 1;
      gameState.passiveIncome = 0;
      gameState.multiplier = 1;
      gameState.maxPlanets = 3;
      gameState.rebirthLevel = 0;
      gameState.rebirthCost = 1000;
      gameState.perks = {clickBonus:0, passiveBonus:0, maxPlanetBonus:0};
      gameState.muted = false;

      // Clear game area and spawn initial planets
      const gameArea = document.getElementById("game-area");
      gameArea.innerHTML = "";
      for(let i=0;i<gameState.maxPlanets;i++){
        document.dispatchEvent(new Event("spawnPlanet"));
      }

      alert("Game has been reset!");
    }
  });
});

  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted ? "🔇" : "🔊";
  });

  adBtn.addEventListener("click", ()=>alert("Ad system coming soon!"));

  settingsBtn.addEventListener("click", ()=>settingsModal.classList.add("active"));
  closeSettings.addEventListener("click", ()=>settingsModal.classList.remove("active"));

  prestigeBtn.addEventListener("click", ()=>rebirthModal.classList.add("active"));
  closeRebirth.addEventListener("click", ()=>rebirthModal.classList.remove("active"));
});
