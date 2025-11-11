document.addEventListener("DOMContentLoaded", () => {
  // ===== Top-left buttons =====
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");
  const settingsBtn = document.getElementById("settings-btn");

  // ===== Modals =====
  const settingsModal = document.getElementById("settings-modal");
  const closeSettings = document.getElementById("close-settings");

  const rebirthModal = document.getElementById("rebirth-modal");
  const closeRebirth = document.getElementById("close-rebirth");

  // ===== Button functionality =====

  // Mute toggle
  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted ? "🔇" : "🔊";
  });

  // Ad button
  adBtn.addEventListener("click", () => {
    alert("Ad system coming soon!");
  });

  // Settings modal open/close
  settingsBtn.addEventListener("click", () => {
    settingsModal.classList.add("active");
  });
  closeSettings.addEventListener("click", () => {
    settingsModal.classList.remove("active");
  });

  // Rebirth modal open/close
  prestigeBtn.addEventListener("click", () => {
    rebirthModal.classList.add("active");
  });
  closeRebirth.addEventListener("click", () => {
    rebirthModal.classList.remove("active");
  });

  // ===== Rebirth functionality =====
  const doRebirthBtn = document.getElementById("do-rebirth");
  const rebirthRequired = document.getElementById("rebirth-required");

  function updateRebirthUI() {
    rebirthRequired.textContent = Math.floor(gameState.rebirthCost);
  }
  updateRebirthUI();

  doRebirthBtn.addEventListener("click", () => {
    if (gameState.credits >= gameState.rebirthCost) {
      // Reset main stats
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

      // Clear game area and spawn planets
      const gameArea = document.getElementById("game-area");
      gameArea.innerHTML = "";
      for (let i = 0; i < gameState.maxPlanets + gameState.perks.maxPlanetBonus; i++) {
        document.dispatchEvent(new Event("spawnPlanet"));
      }

      updateRebirthUI();
      rebirthModal.classList.remove("active");
    } else {
      alert("Not enough credits to rebirth!");
    }
  });
});
