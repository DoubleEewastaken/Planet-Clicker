const muteBtn = document.getElementById("mute-btn");
const settingsBtn = document.getElementById("settings-btn");

muteBtn.addEventListener("click", () => {
  gameState.muted = !gameState.muted;
  muteBtn.textContent = gameState.muted ? "🔇" : "🔊";
});

settingsBtn.addEventListener("click", () => {
  alert("Settings menu coming soon!");
});
