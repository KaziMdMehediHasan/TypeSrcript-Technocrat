{// destructuring

    // object

    const user = {
        id: 345,
        name: {
            firstName: 'John',
            lastName: 'Doe'
        },
        country: 'United States',
        phone: '123-456-789'
    }

    const { id: myId, name: { firstName: fName } } = user; //destructuring with name aliasing. We cannot declare type here

    const diniBrothers = ['Fahim', 'Babu', 'Munim', 'Rifat', 'Sabbir', 'Tariq', 'Jubayer'];

    const [, , aulia, alim, ...taleb] = diniBrothers;
}