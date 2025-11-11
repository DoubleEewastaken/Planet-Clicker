document.addEventListener("DOMContentLoaded", () => {
  const settingsModal = document.getElementById("settings-modal");
  const rebirthModal = document.getElementById("rebirth-modal");

  document.getElementById("settings-btn").addEventListener("click", () => {
    settingsModal.classList.add("active");
  });
  document.getElementById("close-settings").addEventListener("click", () => {
    settingsModal.classList.remove("active");
  });

  document.getElementById("toggle-audio").addEventListener("change", e => gameState.muted = !e.target.checked);
  document.getElementById("toggle-autosave").addEventListener("change", e => gameState.autoSave = e.target.checked);

  document.getElementById("prestige-btn").addEventListener("click", () => {
    rebirthModal.classList.add("active");
  });
  document.getElementById("close-rebirth").addEventListener("click", () => {
    rebirthModal.classList.remove("active");
  });

  document.getElementById("ad-btn").addEventListener("click", ()=>alert("Ads coming soon!"));
  const muteBtn = document.getElementById("mute-btn");
  muteBtn.addEventListener("click", () => {
    gameState.muted = !gameState.muted;
    muteBtn.textContent = gameState.muted?"🔇":"🔊";
  });
});
