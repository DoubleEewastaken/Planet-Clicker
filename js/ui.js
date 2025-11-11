document.addEventListener("DOMContentLoaded", () => {
  const muteBtn = document.getElementById("mute-btn");
  const adBtn = document.getElementById("ad-btn");
  const prestigeBtn = document.getElementById("prestige-btn");
  const rebirthModal = document.getElementById("rebirth-modal");

  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted?"🔇":"🔊";
  });

  adBtn.addEventListener("click", ()=>alert("Ad system coming soon!"));

  prestigeBtn.addEventListener("click", ()=>rebirthModal.classList.add("active"));
});
