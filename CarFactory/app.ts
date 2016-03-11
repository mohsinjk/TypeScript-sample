window.onload = () => {
    var engine = new CarModule.Engine("V8");

    var car = new CarModule.Car(CarModule.CarType.Combi, engine);

    var customer = new CarModule.PrivateCustomer();
    customer.name = "Mohsin JK";
    customer.age = 31;
    car.welcome(customer);
    car.start();
    car.testDrive();
    car.stop();
};