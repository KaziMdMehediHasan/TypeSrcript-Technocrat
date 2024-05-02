{
    //Object Type Alias

    type Student = {
        name: string;
        roll: number;
        phone: string;
        location?: string;
    }
    const student1: Student = {
        name: 'Pritom',
        roll: 1,
        phone: "017XXXXXXXX",
        location: 'Khulna, Bangladesh'
    }

    const student2: Student = {
        name: 'Noyabit',
        roll: 2,
        phone: "016XXXXXXXX"
    }

    // function type alias
    // type + alias name = (value : declare type) => declare return type

    type Details = (name: string, roll: number, phone: string) => string;

    const printStDetails: Details = (name, roll, phone) => `The details of ${name} are as follows: ${roll} and ${phone}`;

    console.log(printStDetails(student1.name, student1.roll, student1.phone));

    //
}