{
    //utility types
    //pick
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>

    // omit
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // required
    type PersonRequired = Required<Person>

    // partial
    type PersonPartial = Partial<Person>

    // readonly

    type PersonReadonly = Readonly<Person>
    const person1: Person = {
        name: 'John',
        age: 22,
        contactNo: "017",
    }

    //record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {};
    const obj1: MyObj = {
        a: 'a',
        b: 'b',
        c: 'cc',
        d: 'dd'
    }

    //
}