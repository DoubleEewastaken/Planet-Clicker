const laserBtn = document.getElementById("upgrade-laser");
const minerBtn = document.getElementById("upgrade-miner");
const multBtn = document.getElementById("upgrade-mult");

let laserCost = 50;
let minerCost = 100;
let multCost = 200;

laserBtn.addEventListener("click", () => {
  if (credits >= laserCost) {
    credits -= laserCost;
    clickValue++;
    laserCost = Math.floor(laserCost * 1.8);
    laserBtn.textContent = `Upgrade Laser (+1 / click) — Cost: ${laserCost}`;
  }
});

minerBtn.addEventListener("click", () => {
  if (credits >= minerCost) {
    credits -= minerCost;
    passiveIncome++;
    minerCost = Math.floor(minerCost * 2);
    minerBtn.textContent = `Buy Auto Miner (+1/sec) — Cost: ${minerCost}`;
    passiveDisplay.textContent = `${passiveIncome}/sec`;
  }
});

multBtn.addEventListener("click", () => {
  if (credits >= multCost) {
    credits -= multCost;
    multiplier *= 2;
    multCost = Math.floor(multCost * 2.5);
    multBtn.textContent = `Planet Multiplier (x${multiplier}) — Cost: ${multCost}`;
  }
});
