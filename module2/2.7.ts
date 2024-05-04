{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    // now we will create a union type literal using the keyof operator

    type Owner = keyof Vehicle;

    type Owner2 = "bike" | "car" | "ship"; //owner and owner2 are exactly the same type

    const user = {
        name: 'Mr. X',
        age: 36,
        email: 'mr.x@gmail.com',
    }

    const car = {
        brand: 'Toyota',
        model: 'corola'
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const result = getPropertyValue(user, 'email');
    const result2 = getPropertyValue(car, 'model');

    console.log(result, result2);
    //
}