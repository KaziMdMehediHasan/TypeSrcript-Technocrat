{
    //Abstraction --> We don't know the real thing but will have some idea

    // through interface
    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // const vehicle1: Vehicle1 = {
    //     name: 'Toyota',
    //     model: 'Corola'
    // }

    //implementation interface
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`Engine started`);
        }
        stopEngine(): void {
            console.log('Engine stopped');
        }
        move(): void {
            console.log(`Car moving`);
        }
        test() {
            console.log(`Test Driver started`);
        }
    }

    const toyotaCar = new Car();

    toyotaCar.test();

    //abstract class --> leader class

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log(`Test Driver started`);
        }
    }

    class ToyotaCar extends Car2 {
        startEngine(): void {
            console.log(`Engine started`);
        }
        stopEngine(): void {
            console.log('Engine stopped');
        }
        move() {
            console.log(`Car moving`);
        }
    }

    // const hondaCar = new Car2();

    // hondaCar.startEngine()



    //
}