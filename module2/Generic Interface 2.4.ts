{
    //interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
        bike?: X
    }

    type CloneSmartWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDev: Developer<CloneSmartWatch> = {
        name: 'Kazi',
        computer: {
            brand: 'Gigabyte',
            model: 'X-255R',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'HK',
            model: '9pro Gen 3',
            display: 'OLED'
        }
    }

    interface AppleSmartWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        brand: string;
        model: string;
    }
    const richDev: Developer<AppleSmartWatch, YamahaBike> = {
        name: 'Kazi',
        computer: {
            brand: 'Apple',
            model: 'M3 Macbook Pro',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Gen 5',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            brand: 'Yamaha',
            model: 'MT50'
        }
    }
    //
}