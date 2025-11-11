document.addEventListener("DOMContentLoaded", () => {
  window.gameState = {
    credits: 0,
    clicks: 0,
    clickValue: 1,
    passiveIncome: 0,
    multiplier: 1,
    maxPlanets: 3,
    rebirthLevel: 0,
    rebirthCost: 1000,
    perks: { clickBonus:0, passiveBonus:0, maxPlanetBonus:0 },
    muted: false,
    autoSave: true
  };

  // Stats UI update
  function updateUI() {
    document.getElementById("credits").textContent = Math.floor(gameState.credits);
    document.getElementById("clicks").textContent = gameState.clicks;
    document.getElementById("passive").textContent = `${gameState.passiveIncome + gameState.perks.passiveBonus}/sec`;
    document.getElementById("rebirth-level").textContent = gameState.rebirthLevel;
    document.getElementById("rebirth-cost").textContent = Math.floor(gameState.rebirthCost);
  }
  setInterval(updateUI, 500);

  // Passive income
  setInterval(() => {
    gameState.credits += gameState.passiveIncome + gameState.perks.passiveBonus;
  }, 1000);

  // Auto-save
  setInterval(() => {
    if(gameState.autoSave) saveGame();
  }, 30000);

  function saveGame() {
    localStorage.setItem('spaceClickerSave', JSON.stringify(gameState));
  }
  function loadGame() {
    const save = localStorage.getItem('spaceClickerSave');
    if(save) Object.assign(gameState, JSON.parse(save));
  }
  loadGame();
});
