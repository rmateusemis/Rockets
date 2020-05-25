"use strict";
// Rocket Class
var Rocket = /** @class */ (function () {
    function Rocket(code, numThrusters) {
        this.thrusters = new Array();
        this.code = code;
        this.numThrusters = numThrusters;
    }
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
