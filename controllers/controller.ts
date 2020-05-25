var rocket1: Rocket;
var rocket2: Rocket;

let rocket1CurrentPower = 0;
let rocket2CurrentPower = 0;

let rocket1Exists = false;
let rocket2Exists = false;

var displayRockets = document.getElementById('displayRockets');
displayRockets?.style.display = 'none';

// Create rocket ---------------------------------------------
function createRocket1() {
    rocket1 = new Rocket('32WESSDS', 3);
    let thruster1 = new Thruster(10, 0);
    let thruster2 = new Thruster(30, 0);
    let thruster3 = new Thruster(80, 0);

    rocket1.addThruster(thruster1);
    rocket1.addThruster(thruster2);
    rocket1.addThruster(thruster3);

    console.log(rocket1);

    rocket1Exists = true;
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

    console.log(rocket2);

    rocket2Exists = true;
}

// Accelerate Rockets ----------------------------------------
function accelerateRocket1() {
    if (rocket1Exists) {
        for (let i = 0; i < rocket1.thrusters.length; i++) {
            if (rocket1.thrusters[i].currentPower < rocket1.thrusters[i].maxPower) {
                rocket1.thrusters[i].currentPower += 10;
            }
        }
        rocket1CurrentPower = rocket1.thrusters[0].currentPower + rocket1.thrusters[1].currentPower + rocket1.thrusters[2].currentPower;
        console.log(rocket1CurrentPower);
    } else {
        alert("Primero debes crear el 'Rocket1'");
    }
}

function accelerateRocket2() {
    if (rocket2Exists) {
        for (let i = 0; i < rocket2.thrusters.length; i++) {
            if (rocket2.thrusters[i].currentPower < rocket2.thrusters[i].maxPower) {
                rocket2.thrusters[i].currentPower += 10;
            }
        }
        rocket2CurrentPower = rocket2.thrusters[0].currentPower + rocket2.thrusters[1].currentPower + rocket2.thrusters[2].currentPower + rocket2.thrusters[3].currentPower + rocket2.thrusters[4].currentPower + rocket2.thrusters[5].currentPower;
        console.log(rocket2CurrentPower);
    } else {
        alert("Primero debes crear el 'Rocket2'");
    }
}

// Break Rockets ----------------------------------------
function breakRocket1() {
    if (rocket1Exists) {
        for (let i = 0; i < rocket1.thrusters.length; i++) {
            if (rocket1.thrusters[i].currentPower > 0) {
                rocket1.thrusters[i].currentPower -= 10;
            }
        }
        rocket1CurrentPower = rocket1.thrusters[0].currentPower + rocket1.thrusters[1].currentPower + rocket1.thrusters[2].currentPower;
        console.log(rocket1CurrentPower);
    } else {
        alert("Primero debes crear el 'Rocket1'");
    }
}

function breakRocket2() {
    if (rocket2Exists) {
        for (let i = 0; i < rocket2.thrusters.length; i++) {
            if (rocket2.thrusters[i].currentPower > 0) {
                rocket2.thrusters[i].currentPower -= 10;
            }
        }
        rocket2CurrentPower = rocket2.thrusters[0].currentPower + rocket2.thrusters[1].currentPower + rocket2.thrusters[2].currentPower + rocket2.thrusters[3].currentPower + rocket2.thrusters[4].currentPower + rocket2.thrusters[5].currentPower;
        console.log(rocket2CurrentPower);
    } else {
        alert("Primero debes crear el 'Rocket2'");
    }
}

// Print Rockets --------------------------------------
function printRocket1() {
    if (rocket1Exists) {
        displayRockets.innerHTML = `ROCKET1: ${rocket1.code}</br> Thrusters max power: ${rocket1.thrusters[0].maxPower}, ${rocket1.thrusters[1].maxPower}, ${rocket1.thrusters[2].maxPower}.</br>Current power: ${rocket1CurrentPower}</br>`;
        displayRockets.style.display = 'inline-block';
    } else {
        alert("Primero debes crear el 'Rocket1'");
    }
}

function printRocket2() {
    if (rocket2Exists) {
        displayRockets.innerHTML = `ROCKET2: ${rocket2.code}<br> Thrusters max power: ${rocket2.thrusters[0].maxPower}, ${rocket2.thrusters[1].maxPower}, ${rocket2.thrusters[2].maxPower}, ${rocket2.thrusters[3].maxPower}, ${rocket2.thrusters[4].maxPower}, ${rocket2.thrusters[5].maxPower}.</br>Current power: ${rocket2CurrentPower}</br>`;
        displayRockets.style.display = 'inline-block';
    } else {
        alert("Primero debes crear el 'Rocket2'");
    }
}

function printAllRockets() {
    if (rocket1Exists && rocket2Exists) {
        displayRockets.innerHTML = `ROCKET1: ${rocket1.code}<br>Thrusters max power: ${rocket1.thrusters[0].maxPower}, ${rocket1.thrusters[1].maxPower}, ${rocket1.thrusters[2].maxPower}.</br>Current power: ${rocket1CurrentPower}</br></br>ROCKET2: ${rocket2.code}<br>Thrusters max power: ${rocket2.thrusters[0].maxPower}, ${rocket2.thrusters[1].maxPower}, ${rocket2.thrusters[2].maxPower}, ${rocket2.thrusters[3].maxPower}, ${rocket2.thrusters[4].maxPower}, ${rocket2.thrusters[5].maxPower}.</br>Current power: ${rocket2CurrentPower}</br>`;
        displayRockets.style.display = 'inline-block';
    } else {
        alert("Primero debes crear los dos 'Rockets'");
    }
}