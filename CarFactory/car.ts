module CarModule {

  export   class Car implements ICar {
        private engine: IEngine;
        private carType: CarType;

        constructor(carType: CarType, engine: IEngine) {
            this.engine = engine;
            this.carType = carType;
        }

        welcome(customer: ICustomer): void {
            console.log("welcome " + customer.name + " - " + customer.age);
        }

        start(): void {
            console.log("start " + this.engine.getEngine() + " " + CarType[this.carType]);
        }

        testDrive(): void {
            var drive = new Drive();
            drive.forward();
            drive.left();
            drive.backward();
            drive.forward();
            drive.right();
            drive.forward();
        }

        stop(): void {
            console.log("stop " + this.engine.getEngine() + " " + CarType[this.carType]);
        }
    }
}

