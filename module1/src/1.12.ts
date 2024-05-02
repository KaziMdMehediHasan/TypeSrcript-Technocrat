{
    //nullable types

    const searchName = (value: string | null) => {
        if (value) {
            console.log('Searching');
        } else {
            console.log('Nothing to search');
        }
    }

    searchName("persian");

    // unknown types

    const getSpeedms = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`Speed: ${convertedSpeed}`);
        }

        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`Speed: ${convertedSpeed}`);
        }

        else {
            console.log('Wrong input');
        }
    };

    getSpeedms(`1000 kmh`);

    //never type

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }

    throwError('Error by mistake');
}