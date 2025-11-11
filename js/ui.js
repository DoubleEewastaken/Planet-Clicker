document.addEventListener("DOMContentLoaded", () => {
  // Top-left buttons
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");

  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted?"🔇":"🔊";
  });

  adBtn.addEventListener("click", ()=>alert("Ad system coming soon!"));
});
