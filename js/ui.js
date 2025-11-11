const prestigeBtn = document.getElementById("prestige-btn");
const settingsBtn = document.getElementById("settings-btn");
const adBtn = document.getElementById("ad-btn");
const muteBtn = document.getElementById("mute-btn");

const settingsModal = document.getElementById("settings-modal");
const closeSettings = document.getElementById("close-settings");

const toggleAudio = document.getElementById("toggle-audio");
const toggleAutoSave = document.getElementById("toggle-autosave");

settingsBtn.addEventListener("click",()=>settingsModal.classList.add("active"));
closeSettings.addEventListener("click",()=>settingsModal.classList.remove("active"));

toggleAudio.addEventListener("change", e=>gameState.muted=!e.target.checked);
toggleAutoSave.addEventListener("change", e=>gameState.autoSave=e.target.checked);

adBtn.addEventListener("click",()=>alert("Ad system coming soon!"));
muteBtn.addEventListener("click",()=>{
  gameState.muted=!gameState.muted;
  muteBtn.textContent = gameState.muted?"🔇":"🔊";
});
