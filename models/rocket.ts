// Rocket Class
class Rocket {
    public code: string;
    public numThrusters: number;
    private _thrusters: Thruster[] = new Array();
    public get thrusters(): Thruster[] {
        return this._thrusters;
    }
    public set thrusters(value: Thruster[]) {
        this._thrusters = value;
    }

    constructor(code: string, numThrusters: number) {
        this.code = code;
        this.numThrusters = numThrusters;
    }

    addThruster(thruster: Thruster): void {
        this.thrusters.push(thruster);
    }
}