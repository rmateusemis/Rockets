// CONTROLLER
var rocket1: Rocket;
var rocket2: Rocket;

var displayRockets = document.getElementById('displayRockets');

// Create rocket
function createRocket1() {
    rocket1 = new Rocket('32WESSDS', 3);
    let thruster1 = new Thruster(10, 0);
    let thruster2 = new Thruster(30, 0);
    let thruster3 = new Thruster(80, 0);

    rocket1.addThruster(thruster1);
    rocket1.addThruster(thruster2);
    rocket1.addThruster(thruster3);

    console.log(rocket1);

    displayRockets.innerHTML +=  rocket1.code + ": " + thruster1.maxPower + ", " + thruster2.maxPower + ", " + thruster2.maxPower + "."  + "</br>";
}

function createRocket2() {
    rocket2 = new Rocket('LDSFJA32', 6);
    let thruster1 = new Thruster(30, 0);
    let thruster2 = new Thruster(40, 0);
    let thruster3 = new Thruster(50, 0);
    let thruster4 = new Thruster(50, 0);
    let thruster5 = new Thruster(30, 0);
    let thruster6 = new Thruster(10, 0);

    rocket2.addThruster(thruster1);
    rocket2.addThruster(thruster2);
    rocket2.addThruster(thruster3);
    rocket2.addThruster(thruster4);
    rocket2.addThruster(thruster5);
    rocket2.addThruster(thruster6);


    displayRockets.innerHTML += rocket2.code + ": " + thruster1.maxPower + ", " + thruster2.maxPower + ", " + thruster3.maxPower + ", " + thruster4.maxPower + ", " + thruster5.maxPower + ", " + thruster6.maxPower + ".";
}


/*
let rocket1 = new Rocket('32WESSDS', 3);
let thruster1 = new Thruster(10, 0);
let thruster2 = new Thruster(30, 0);
let thruster3 = new Thruster(80, 0);

let rocket1MaxPower = thruster1.maxPower + thruster2.maxPower + thruster3.maxPower;

let rocket1CurrentPower = thruster1.currentPower + thruster2.currentPower + thruster3.currentPower;

rocket1.addThruster(thruster1);
rocket1.addThruster(thruster2);
rocket1.addThruster(thruster3);

// accelerateRocket()
let thruster1Increment = 0;
let thruster2Increment = 0;
let thruster3Increment = 0;
let i = 0;

while (rocket1CurrentPower < rocket1MaxPower) {
    if (thruster1.currentPower < thruster1.maxPower) {
        thruster1Increment = 10;
        thruster1.currentPower += 10;
    } else {
        thruster1Increment = 0
    }
    if (thruster2.currentPower < thruster2.maxPower) {
        thruster2Increment = 10;
        thruster2.currentPower += 10;
    } else {
        thruster2Increment = 0
    }
    if (thruster3.currentPower < thruster3.maxPower) {
        thruster3Increment = 10;
        thruster3.currentPower += 10;
    } else {
        thruster3Increment = 0
    }
    i++;
    rocket1CurrentPower = thruster1.currentPower + thruster2.currentPower + thruster3.currentPower;

    console.log("Increment " + i + "cop: " + thruster1Increment + "+" + thruster2Increment + "+" + thruster3Increment + "=" + rocket1CurrentPower + "potència actual");
}
console.log(thruster1.currentPower);
console.log(thruster2.currentPower);
console.log(thruster3.currentPower);

console.log(rocket1CurrentPower);
*/