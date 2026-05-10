const NameShip = "Odyssee"
let health = 5;
let health2= {health:5, money:2}

let inventory = { sheeld: 0, RepKit: 0, money: 50 };
let monkey = {
    health: 10,
    inventory: {
        brieftasche: { money: 50 },
        rucksack: { sheeld: 0, RepKit: 0 }
    },
    injuries: {
        head:0,
        chest:0,
        legs:0,
    }

}

function renderStatus() {
    const status = document.getElementById("status");
    let inventoryStatus = "";
    for (i in inventory) {
        inventoryStatus += `<tr><td>${i}</td><td>${inventory[i]}</td></tr>`;
    }
    // status.innerHTML = `

    //     <table>
    //         <tr><td>Name:</td><td>${NameShip}</td></tr>
    //         <tr><td>Leben:</td><td>${health}</td></tr>
    //     </table>

    //     <table>
    //     <tr><td>Name:</td><td>${inventory.sheeld}</td></tr>
    //     <tr><td>RepKit:</td><td>${inventory.RepKit}</td></tr>
    //     <tr><td>Geld:</td><td>${inventory.money}</td></tr>
    //     </table>
    // `
    status.innerHTML = `

        <table>
            <tr><td>Name:</td><td>${NameShip}</td></tr>
            <tr><td>Leben:</td><td>${health}</td></tr>
        </table>

        <table>
            ${inventoryStatus}
        </table>
    `
}

function getDamage() {
    const amount = document.getElementById("damage").value;
    if (inventory.sheeld >= 1) {
        health = health - amount * 0.5;
        inventory.sheeld = inventory.sheeld - 1;
    } else {
        health = health - amount;
    }

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
    if (inventory.money >= amount) {
        inventory.RepKit = inventory.RepKit + amount;
        inventory.money = inventory.money - amount;
        console.log("You got a RepKit : " + amount);

    }
    else {
        console.log("You don´t have enough Gold!!");
    }
    renderStatus();
}

function useRepKit() {
    const amount = 1;
    if (inventory.RepKit >= amount) {
        inventory.RepKit = inventory.RepKit - amount
        health = health + amount
    }
    else {
        console.log("You don´t have enough RepKits!! Go and buy a few");
    }
    renderStatus();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------


function buySheeld() {
    const amount = Number(document.getElementById("sheeld").value);
    if (inventory.money >= amount) {
        inventory.sheeld = inventory.sheeld + amount;
        inventory.money = inventory.money - amount;
        console.log("You got a Sheeld : " + amount);

    }
    else {
        console.log("You don´t have enough Gold!!");
    }
    renderStatus();
}

renderStatus()
