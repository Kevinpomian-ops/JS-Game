const NameShip = "Odyssee"
let health = 5;
let money = 50;
let RepKit = 0;

function renderStatus() {
    const status = document.getElementById("status");
    status.innerHTML = `
        <table>
            <tr><td>Name:</td><td>${NameShip}</td></tr>
            <tr><td>Leben:</td><td>${health}</td></tr>
            <tr><td>Geld:</td><td>${money}</td></tr>
            <tr><td>Reparatur-Kits:</td><td>${RepKit}</td></tr>
        </table>
    `
}

function getDamage() {
    const amount = document.getElementById("damage").value;
    health = health - amount;
    if (health <= 0) {
        document.getElementById("status").classList.add("death");
        document.getElementById("text").innerHTML = "Du bist gestorben"
        health = 0;
    }
    renderStatus();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function buyRepKit() {
    const amount = Number(document.getElementById("repkit").value);
    if (money >= amount) {
        RepKit = RepKit + amount;
        money = money - amount;
        console.log("You got a RepKit : " + amount);

    }
    else {
        console.log("You don´t have enough Gold!!");
    }
    renderStatus();
}

function useRepKit() {
    const amount = 1;
    if (RepKit >= amount) {
        RepKit = RepKit - amount
        health = health + amount
    }
    else {
        console.log("You don´t have enough RepKits!! Go and buy a few");
    }
    renderStatus();
}

renderStatus()
