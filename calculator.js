const racerUpgradeCosts = {
        1: { shards: 0, coins: 0 },
        2: { shards: 1, coins: 150 },
        3: { shards: 1, coins: 170 },
        4: { shards: 1, coins: 190 },
        5: { shards: 1, coins: 210 },
        6: { shards: 1, coins: 230 },
        7: { shards: 1, coins: 250 },
        8: { shards: 1, coins: 270 },
        9: { shards: 1, coins: 300 },
        10: { shards: 1, coins: 320 },
        11: { shards: 2, coins: 350 },
        12: { shards: 2, coins: 380 },
        13: { shards: 2, coins: 400 },
        14: { shards: 2, coins: 450 },
        15: { shards: 2, coins: 500 },
        16: { shards: 2, coins: 540 },
        17: { shards: 2, coins: 580 },
        18: { shards: 2, coins: 630 },
        19: { shards: 2, coins: 700 },
        20: { shards: 3, coins: 750 },
        21: { shards: 3, coins: 820 },
        22: { shards: 3, coins: 900 },
        23: { shards: 3, coins: 970 },
        24: { shards: 3, coins: 1050 },
        25: { shards: 3, coins: 1150 },
        26: { shards: 4, coins: 1250 },
        27: { shards: 4, coins: 1350 },
        28: { shards: 4, coins: 1450 },
        29: { shards: 4, coins: 1550 },
        30: { shards: 4, coins: 1700 },
        31: { shards: 5, coins: 1850 },
        32: { shards: 5, coins: 2000 },
        33: { shards: 5, coins: 2150 },
        34: { shards: 5, coins: 2300 },
        35: { shards: 5, coins: 2500 },
        36: { shards: 5, coins: 2700 },
        37: { shards: 5, coins: 3000 },
        38: { shards: 5, coins: 3300 },
        39: { shards: 5, coins: 3600 },
        40: { shards: 5, coins: 4000 },
        41: { shards: 7, coins: 4300 },
        42: { shards: 7, coins: 4750 },
        43: { shards: 7, coins: 5200 },
        44: { shards: 7, coins: 5700 },
        45: { shards: 9, coins: 6200 },
        46: { shards: 9, coins: 6700 },
        47: { shards: 9, coins: 7300 },
        48: { shards: 10, coins: 8000 },
        49: { shards: 10, coins: 8900 },
        50: { shards: 10, coins: 10000 }
    };


function calculateResources() {
    let currentLevel = document.getElementById("currentLevel").value;
    let desiredLevel = document.getElementById("desiredLevel").value;

    if (isNaN(currentLevel) || isNaN(desiredLevel) || currentLevel >= desiredLevel || currentLevel < 1 || desiredLevel > 50) {
        alert("Please enter valid levels (current < desired, between 1 and 50).");
        return;
    }

    let totalShards = 0;
    let totalCoins = 0;

    for (let level = currentLevel; level <= desiredLevel; level++) {
        totalShards += racerUpgradeCosts[level].shards;
        totalCoins += racerUpgradeCosts[level].coins;
    }

    document.getElementById("shards").textContent = totalShards;
    document.getElementById("coins").textContent = totalCoins;
}
