{
    //ternary operator

    const age: number = 15;

    if (age >= 18) {
        console.log('Adult');
    } else {
        console.log('Not adult');
    }

    const isAdult = age >= 18 ? 'adult' : 'notAdult';

    // console.log({ isAdult });

    //nullish coalescing operator --> use only when decision depends of null or undefined

    const isAuthenticated = "";

    const result1 = isAuthenticated ?? 'Guest'; // this will output an empty string as isAuthenticated is not null/undefined. If it were null/undefined then it would've been 'Guest'. Follow the second example to understand this better.
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';

    console.log({ result1 }, { result2 });

    // example 2:

    type User = {
        name: string;
        address: {
            city: string;
            country: string;
            postal: number;
            isCitizen?: boolean
        }
    }

    const umar: User = {
        name: 'Umar bin Khattab',
        address: {
            city: 'Mekkah',
            country: 'Saudi Arabia',
            postal: 2001
        }
    }

    const permanent = umar.address?.isCitizen ?? "not a by born Medinian";
    const remarks = umar.name + ' comes from ' + umar.address.city + ' but he is ' + permanent;

    console.log(remarks);
}