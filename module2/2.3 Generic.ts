{
    //generic type
    type GenericArray<T> = Array<T>;

    // const rollnumbers: number[] = [1, 2, 3, 4, 5];
    const rollnumbers: GenericArray<number> = [2, 5, 9];

    const workers: GenericArray<{ name: string; age: 36 }> = [{
        name: 'Laltu',
        age: 36
    }]

    type StudentDetails = {
        name: string;
        address: {
            city: string;
            post: number;
        }

    }

    const student1: GenericArray<StudentDetails> = [{ name: 'Rasel', address: { city: 'Khulna', post: 9000 } }]

    // generic tuple
    type GenericTuple<X, Y> = [X, Y]
    const person: GenericTuple<string, string> = ['Mr. X', 'Mr. Y',];

    const userWithID: GenericTuple<number, { name: string, age: number }> = [1234, { name: 'John', age: 40 }];

    //
}