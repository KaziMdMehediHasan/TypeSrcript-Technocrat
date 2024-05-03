{
    //

    //type assertion --> When developer understands which type to infer than TypeScript that is type assertion

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The result for your input is ${convertedValue}`;
        } else if (typeof value === "number") {
            return value * 1000;
        }
    }

    const result1 = kgToGm(10) as number;
    const result2 = kgToGm("10") as string;

    type Error = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as Error).message)
    }

    //
}