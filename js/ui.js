document.addEventListener("DOMContentLoaded", () => {
  // Top-left buttons
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");
  const settingsBtn = document.getElementById("settings-btn");

  // Modals
  const settingsModal = document.getElementById("settings-modal");
  const closeSettingsBtn = document.getElementById("close-settings");

  const rebirthModal = document.getElementById("rebirth-modal");
  const closeRebirthBtn = document.getElementById("close-rebirth");

  // Mute toggle
  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted ? "🔇" : "🔊";
  });

  // Ad button
  adBtn.addEventListener("click", () => {
    alert("Ad system coming soon!");
  });

  // Settings modal
  settingsBtn.addEventListener("click", () => {
    settingsModal.classList.add("active");
  });
  closeSettingsBtn.addEventListener("click", () => {
    settingsModal.classList.remove("active");
  });

  // Rebirth modal
  prestigeBtn.addEventListener("click", () => {
    rebirthModal.classList.add("active");
  });
  closeRebirthBtn.addEventListener("click", () => {
    rebirthModal.classList.remove("active");
  });
});
