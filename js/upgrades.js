const laserBtn = document.getElementById("upgrade-laser");
const minerBtn = document.getElementById("upgrade-miner");
const multBtn = document.getElementById("upgrade-mult");

let laserCost = 50;
let minerCost = 100;
let multCost = 200;

laserBtn.addEventListener("click", () => {
  if (gameState.credits >= laserCost) {
    gameState.credits -= laserCost;
    gameState.clickValue++;
    laserCost = Math.floor(laserCost * 1.8);
    laserBtn.textContent = `Upgrade Laser (+1 / click) — Cost: ${laserCost}`;
  }
});

minerBtn.addEventListener("click", () => {
  if (gameState.credits >= minerCost) {
    gameState.credits -= minerCost;
    gameState.passiveIncome++;
    minerCost = Math.floor(minerCost * 2);
    minerBtn.textContent = `Buy Auto Miner (+1/sec) — Cost: ${minerCost}`;
  }
});

multBtn.addEventListener("click", () => {
  if (gameState.credits >= multCost) {
    gameState.credits -= multCost;
    gameState.multiplier *= 2;
    multCost = Math.floor(multCost * 2.5);
    multBtn.textContent = `Planet Multiplier (x${gameState.multiplier}) — Cost: ${multCost}`;
  }
});
