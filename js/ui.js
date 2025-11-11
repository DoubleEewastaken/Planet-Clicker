document.addEventListener("DOMContentLoaded", () => {
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");
  const settingsBtn = document.getElementById("settings-btn");

  const settingsModal = document.getElementById("settings-modal");
  const closeSettings = document.getElementById("close-settings");
  const rebirthModal = document.getElementById("rebirth-modal");
  const closeRebirth = document.getElementById("close-rebirth");

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
