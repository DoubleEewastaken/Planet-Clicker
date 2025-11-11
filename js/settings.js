document.addEventListener("DOMContentLoaded", () => {
  const toggleAudio = document.getElementById("toggle-audio");
  const toggleAutoSave = document.getElementById("toggle-autosave");

  toggleAudio.addEventListener("change", e => {
    gameState.muted = !e.target.checked;
  });

  toggleAutoSave.addEventListener("change", e => {
    gameState.autoSave = e.target.checked;
  });
});
