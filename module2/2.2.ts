{
    //interface
    // when to use?
    // use specially to declare type of objects

    // first look at the type alias and how to extend it

    type User = {
        name: string;
        role: string;
        age: number;
    }

    // extending type alias with intersection
    type User1 = User & { status: string; }

    const userWithRole: User1 = {
        name: 'Seikh Lion',
        role: 'Commander',
        age: 53,
        status: 'Not Available'
    }

    // now lets explore the same thing with interfaces

    interface User3 {
        name: string;
        occupation: string;
        salary: number;
    }

    interface Military extends User3 {
        isArmed: boolean;
    }

    const employee: Military = {
        name: 'Captain Price',
        occupation: 'Navy Seal',
        salary: 2000,
        isArmed: true
    }

    // let's check how interface differs from type alias in terms of array and function type declarations

    // array

    type Fruits = string[];

    interface Fruits2 {
        [index: number]: string; // first declare what is the type of the index then the value type
    }

    interface Numbers {
        [index: number]: number;
    }
    const fruits: Fruits2 = ['Mango', 'Apple', 'Orange', 'Pomegranate', 'Olive'];

    const evenNumbers: Numbers = [2, 4, 6, 8, 10];

    // function

    type Add = (value1: number, value2: number) => number;

    interface Substract {
        (input1: number, input2: number): number; //basic structure --> (input values with types) : return type
    }

    const substract2: Substract = (input1, input2) => input1 - input2;

    console.log(substract2(7, 2));
    //
}