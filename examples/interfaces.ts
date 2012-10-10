interface Drivable {
    // Start the car's ignition so that it can drive.
    start(): void;
    // Attempt to drive a distance. Returns true or false based on whether or not the drive was successful.
    drive(distance: number): bool;
    // Give the distance from the start.
    getPosition(): number;
}

class Car implements Drivable {
    private isRunning: bool;
    private distanceFromStart: number;
    constructor() {
        this.isRunning = false;
        this.distanceFromStart = 0;
    }
    public start() {
        this.isRunning = true;
    }
    public drive(distance: number): bool {
        if (this.isRunning) {
            this.distanceFromStart += distance;
            return true;
        }
        return false;
    }
    public getPosition(): number {
        return this.distanceFromStart;
    }
}