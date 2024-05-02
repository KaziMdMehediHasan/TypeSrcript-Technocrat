//reference type --> object

const user: {
    company: 'Programming Hero'; //type --> literal type --> fixed value
    readonly country: string;
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    country: 'Bangladesh',
    firstName: 'John',
    middleName: 'Steven',
    lastName: 'Doe',
    isMarried: true
};

// user.country = "USA";  --> can't assign due to readonly type

