document.addEventListener("DOMContentLoaded", () => {
  const settingsModal = document.getElementById("settings-modal");
  const toggleAudio = document.getElementById("toggle-audio");
  const toggleAutoSave = document.getElementById("toggle-autosave");
  const closeSettings = document.getElementById("close-settings");
  const settingsBtn = document.getElementById("settings-btn");

  settingsBtn.addEventListener("click", ()=>settingsModal.classList.add("active"));
  closeSettings.addEventListener("click", ()=>settingsModal.classList.remove("active"));

  toggleAudio.addEventListener("change", e => gameState.muted = !e.target.checked);
  toggleAutoSave.addEventListener("change", e => gameState.autoSave = e.target.checked);
});
