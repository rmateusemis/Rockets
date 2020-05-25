"use strict";
var rocket1;
var rocket2;
var rocket1CurrentPower = 0;
var rocket2CurrentPower = 0;
var rocket1Exists = false;
var rocket2Exists = false;
var displayRockets = document.getElementById('displayRockets');
// Create rocket ---------------------------------------------
function createRocket1() {
    rocket1 = new Rocket('32WESSDS', 3);
    var thruster1 = new Thruster(10, 0);
    var thruster2 = new Thruster(30, 0);
    var thruster3 = new Thruster(80, 0);
    rocket1.addThruster(thruster1);
    rocket1.addThruster(thruster2);
    rocket1.addThruster(thruster3);
    console.log(rocket1);
    rocket1Exists = true;
}
function createRocket2() {
    rocket2 = new Rocket('LDSFJA32', 6);
    var thruster1 = new Thruster(30, 0);
    var thruster2 = new Thruster(40, 0);
    var thruster3 = new Thruster(50, 0);
    var thruster4 = new Thruster(50, 0);
    var thruster5 = new Thruster(30, 0);
    var thruster6 = new Thruster(10, 0);
    rocket2.addThruster(thruster1);
    rocket2.addThruster(thruster2);
    rocket2.addThruster(thruster3);
    rocket2.addThruster(thruster4);
    rocket2.addThruster(thruster5);
    rocket2.addThruster(thruster6);
    console.log(rocket2);
    rocket2Exists = true;
}
// Accelerate Rocket ----------------------------------------
function accelerateRocket1() {
    if (rocket1Exists) {
        if (rocket1.thrusters[0].currentPower < rocket1.thrusters[0].maxPower) {
            rocket1.thrusters[0].currentPower += 10;
        }
        if (rocket1.thrusters[1].currentPower < rocket1.thrusters[1].maxPower) {
            rocket1.thrusters[1].currentPower += 10;
        }
        if (rocket1.thrusters[2].currentPower < rocket1.thrusters[2].maxPower) {
            rocket1.thrusters[2].currentPower += 10;
        }
        rocket1CurrentPower = rocket1.thrusters[0].currentPower + rocket1.thrusters[1].currentPower + rocket1.thrusters[2].currentPower;
        console.log(rocket1CurrentPower);
    }
    else {
        alert("Primero debes crear el 'Rocket1'");
    }
}
function accelerateRocket2() {
    if (rocket2Exists) {
        if (rocket2.thrusters[0].currentPower < rocket2.thrusters[0].maxPower) {
            rocket2.thrusters[0].currentPower += 10;
        }
        if (rocket2.thrusters[1].currentPower < rocket2.thrusters[1].maxPower) {
            rocket2.thrusters[1].currentPower += 10;
        }
        if (rocket2.thrusters[2].currentPower < rocket2.thrusters[2].maxPower) {
            rocket2.thrusters[2].currentPower += 10;
        }
        if (rocket2.thrusters[3].currentPower < rocket2.thrusters[3].maxPower) {
            rocket2.thrusters[3].currentPower += 10;
        }
        if (rocket2.thrusters[4].currentPower < rocket2.thrusters[4].maxPower) {
            rocket2.thrusters[4].currentPower += 10;
        }
        if (rocket2.thrusters[5].currentPower < rocket2.thrusters[5].maxPower) {
            rocket2.thrusters[5].currentPower += 10;
        }
        rocket2CurrentPower = rocket2.thrusters[0].currentPower + rocket2.thrusters[1].currentPower + rocket2.thrusters[2].currentPower + rocket2.thrusters[3].currentPower + rocket2.thrusters[4].currentPower + rocket2.thrusters[5].currentPower;
        console.log(rocket2CurrentPower);
    }
    else {
        alert("Primero debes crear el 'Rocket2'");
    }
}
// Break Rocket ----------------------------------------
function breakRocket1() {
    if (rocket1Exists) {
        if (rocket1.thrusters[0].currentPower > 0) {
            rocket1.thrusters[0].currentPower -= 10;
        }
        if (rocket1.thrusters[1].currentPower > 0) {
            rocket1.thrusters[1].currentPower -= 10;
        }
        if (rocket1.thrusters[2].currentPower > 0) {
            rocket1.thrusters[2].currentPower -= 10;
        }
        rocket1CurrentPower = rocket1.thrusters[0].currentPower + rocket1.thrusters[1].currentPower + rocket1.thrusters[2].currentPower;
        console.log(rocket1CurrentPower);
    }
    else {
        alert("Primero debes crear el 'Rocket1'");
    }
}
function breakRocket2() {
    if (rocket2Exists) {
        if (rocket2.thrusters[0].currentPower > 0) {
            rocket2.thrusters[0].currentPower -= 10;
        }
        if (rocket2.thrusters[1].currentPower > 0) {
            rocket2.thrusters[1].currentPower -= 10;
        }
        if (rocket2.thrusters[2].currentPower > 0) {
            rocket2.thrusters[2].currentPower -= 10;
        }
        if (rocket2.thrusters[3].currentPower > 0) {
            rocket2.thrusters[3].currentPower -= 10;
        }
        if (rocket2.thrusters[4].currentPower > 0) {
            rocket2.thrusters[4].currentPower -= 10;
        }
        if (rocket2.thrusters[5].currentPower > 0) {
            rocket2.thrusters[5].currentPower -= 10;
        }
        rocket2CurrentPower = rocket2.thrusters[0].currentPower + rocket2.thrusters[1].currentPower + rocket2.thrusters[2].currentPower + rocket2.thrusters[3].currentPower + rocket2.thrusters[4].currentPower + rocket2.thrusters[5].currentPower;
        console.log(rocket2CurrentPower);
    }
    else {
        alert("Primero debes crear el 'Rocket2'");
    }
}
// Print Rocket --------------------------------------
function printRocket1() {
    if (rocket1Exists) {
        displayRockets.innerHTML += "Rocket 1: " + rocket1.code + " thrusters max power: " + rocket1.thrusters[0].maxPower + ", " + rocket1.thrusters[1].maxPower + ", " + rocket1.thrusters[2].maxPower + "." + "</br>";
        displayRockets.innerHTML += "Rocket 1 current power: " + rocket1CurrentPower + "</br>";
    }
    else {
        alert("Primero debes crear el 'Rocket1'");
    }
}
function printRocket2() {
    if (rocket2Exists) {
        displayRockets.innerHTML += "Rocket 2: " + rocket2.code + " thrusters max power: " + rocket2.thrusters[0].maxPower + ", " + rocket2.thrusters[1].maxPower + ", " + rocket2.thrusters[2].maxPower + ", " + rocket2.thrusters[3].maxPower + ", " + rocket2.thrusters[4].maxPower + ", " + rocket2.thrusters[5].maxPower + "." + "</br>";
        displayRockets.innerHTML += "Rocket 2 current power: " + rocket2CurrentPower + "</br>";
    }
    else {
        alert("Primero debes crear el 'Rocket2'");
    }
}
function printAllRockets() {
    if (rocket1Exists && rocket2Exists) {
        displayRockets.innerHTML += "Rocket 1: " + rocket1.code + " thrusters max power: " + rocket1.thrusters[0].maxPower + ", " + rocket1.thrusters[1].maxPower + ", " + rocket1.thrusters[2].maxPower + "." + "</br>";
        displayRockets.innerHTML += "Rocket 1 current power: " + rocket1CurrentPower + "</br>";
        displayRockets.innerHTML += "Rocket 2: " + rocket2.code + " thrusters max power: " + rocket2.thrusters[0].maxPower + ", " + rocket2.thrusters[1].maxPower + ", " + rocket2.thrusters[2].maxPower + ", " + rocket2.thrusters[3].maxPower + ", " + rocket2.thrusters[4].maxPower + ", " + rocket2.thrusters[5].maxPower + "." + "</br>";
        displayRockets.innerHTML += "Rocket 2 current power: " + rocket2CurrentPower + "</br>";
    }
    else {
        alert("Primero debes crear los dos 'Rockets'");
    }
}
