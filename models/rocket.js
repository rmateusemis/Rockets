"use strict";
// Rocket Class
var Rocket = /** @class */ (function () {
    function Rocket(code, numThrusters) {
        this._thrusters = new Array();
        this.code = code;
        this.numThrusters = numThrusters;
    }
    Object.defineProperty(Rocket.prototype, "thrusters", {
        get: function () {
            return this._thrusters;
        },
        set: function (value) {
            this._thrusters = value;
        },
        enumerable: true,
        configurable: true
    });
    Rocket.prototype.addThruster = function (thruster) {
        this.thrusters.push(thruster);
    };
    return Rocket;
}());
