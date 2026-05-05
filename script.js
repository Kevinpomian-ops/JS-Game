let NameShip = "Odyssee"
let health = 100
let money = 50
let RepKit = 0

function renderStatus() {
    const status = document.getElementById("status");
    status.innerHTML = `
        <table>
            <tr><td>Name</td><td>${NameShip}</td></tr>
            <tr><td>Leben</td><td>${health}</td></tr>
            <tr><td>Gold</td><td>${money}</td></tr>
            <tr><td>Tränke</td><td>${RepKit}</td></tr>
        </table>
    `
}

function getDamage() {
    const amount = document.getElementById("inputfield").value;
    health = health - amount;
    if (health <= 0) {
        document.getElementById("status").classList.add("death");
        health = 0;
    }
    getStatus();
}

function buyRepKit() {
    if (money >= amount) {
        RepKit = RepKit + amount;
        money = money - amount;
        console.log("You got a RepKit : " + amount);

    }
    else {
        console.log("You don´t have enough Money!!");
    }
}

function getRepKit() {
    if (RepKit >= amount) {
        RepKit = RepKit - amount
        health = health + amount
    }
    else {
        console.log("You don´t have enough RepKits!! Please go and buy a few");
    }
}
