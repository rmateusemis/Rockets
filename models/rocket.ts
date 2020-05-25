// Rocket Class
class Rocket {
    public code: string;
    public numThrusters: number;
    public thrusters: Thruster[] = new Array();

    constructor(code: string, numThrusters: number) {
        this.code = code;
        this.numThrusters = numThrusters;
    }

    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster);
    }
}