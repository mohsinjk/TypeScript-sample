interface ICar {
    start(): void;
    testDrive(): void;
    stop(): void;
}

interface IEngine {
    getEngine(): string;
}

interface IDrive {
    left(): void;
    right(): void;
    forward(): void;
    backward(): void;
}



class Car implements ICar {
    private engine: IEngine;
    private carType: CarType;
    constructor(carType: CarType, engine: IEngine) {
        this.engine = engine;
        this.carType = carType;
    }

    welcome(customer: PrivateCustomer): void {
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

class Engine implements IEngine {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    getEngine(): string {
        return this.name;
    }
}

enum CarType {
    Sedan,
    Suv,
    Combi
}

class Drive implements IDrive {
    left(): void { console.log("left"); }

    right(): void { console.log("right");}

    forward(): void { console.log("forward");}

    backward(): void { console.log("backward");}
}

interface ICustomer {
    name: string;
    age: number;
}

class PrivateCustomer {
    name: string;
    age: number;
}
window.onload = () => {
    var engine = new Engine("V8");
    
    var car = new Car(CarType.Combi, engine);
    var myObj = { name: "Mohsin JK", age: 10 };
    var customer = new PrivateCustomer();
    customer.name = "Mohsin JK";
    customer.age = 31;
    car.welcome(myObj);
    car.welcome(customer);
    car.start();
    car.testDrive();
    car.stop();
};