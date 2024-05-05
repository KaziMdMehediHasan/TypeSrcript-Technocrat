{
    // oop- inheritance

    class Person {
        constructor(public name: string, public age: number, public address: string) { }
        getSleep(hours: number) {
            console.log(`${this.name} sleeps for ${hours} in a day`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const bishal = new Student('Bishal', 23, 'Pabna');

    class Teacher extends Person {
        constructor(name: string, age: number, address: string, public designation: string) {
            super(name, age, address);
            // this.designation = designation; --> use this if you don't use to public keyword
        }
        takeClass(classes: number) {
            console.log(`${this.name} will take ${classes} classes in a week`)
        }
    }

    const safwan = new Teacher('Safwan', 30, 'Khulna', 'Teacher');
    //
}