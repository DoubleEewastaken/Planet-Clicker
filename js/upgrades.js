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
    laserCost *= 2;
    laserBtn.textContent = `Upgrade Laser (+1 / click) — Cost: ${laserCost}`;
  }
});

minerBtn.addEventListener("click", () => {
  if (credits >= minerCost) {
    credits -= minerCost;
    passiveIncome++;
    minerCost *= 2;
    minerBtn.textContent = `Buy Auto Miner (+1/sec) — Cost: ${minerCost}`;
  }
});

multBtn.addEventListener("click", () => {
  if (credits >= multCost) {
    credits -= multCost;
    multiplier *= 2;
    multCost *= 3;
    multBtn.textContent = `Planet Multiplier (x${multiplier}) — Cost: ${multCost}`;
  }
});
