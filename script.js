let NameShip = "Odyssee"
let health = 100
let money = 50
let RepKit = 0

function getStatus() {
    console.log("Name of the Ship: " + NameShip);
    console.log("Health: " + health);
    console.log("Money: " + money);
    console.log("Ship RepKid: " + RepKit);
}

function getDamage(amount) {
    health = health - amount;
    console.log("You got damage: " + amount);

}

function buyRepKit(amount) {
    if (money >= amount) {
        RepKit = RepKit + amount;
        money = money - amount;
    console.log("You got a RepKit : " + amount);
        
    }
    else {
        console.log("You don´t have enough Money!!");
    }
}

function getRepKit(amount) {
    if (RepKit >= amount) {
        RepKit = RepKit - amount
        health = health + amount
    }
    else {
        console.log("You don´t have enough RepKits!! Please go and buy a few");
    }
}


getStatus();
getDamage(30);
getStatus();
getRepKit(1);
buyRepKit(1);