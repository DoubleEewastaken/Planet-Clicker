// global state
window.gameState = {
  credits: 0,
  clicks: 0,
  clickValue: 1,
  passiveIncome: 0,
  multiplier: 1,
  muted: false,
};

// update UI once per second
setInterval(() => {
  document.getElementById("credits").textContent = Math.floor(gameState.credits);
  document.getElementById("clicks").textContent = gameState.clicks;
  document.getElementById("passive").textContent = `${gameState.passiveIncome}/sec`;
}, 1000);
