{
    //union types
    type Frontend = {
        skills: string[];
        perks: 'Good Developer' | 'Fakibaj Developer';
    };
    type Backend = {
        skills: string[];
        perks: 'Knowledgeable Developer' | 'Fakibaj Developer';
    };


    type Webdeveloper = Frontend | Backend;

    type Fullstack = {
        name: string;
        title: string;
        // strength: {
        //     frontend: Frontend;
        //     backend: Backend;
        // };
        strength: Frontend & Backend; // in this type of nested intersection where values come from union type, there must be one common value between them.
    };

    type Developer = {
        name: string;
        title: string;
        designation: Webdeveloper;
        language?: 'JavaScript' | 'TypeScript' | 'Python';
    }

    const developer1: Developer = {
        name: 'Mr. X',
        title: 'Web Developer',
        designation: {
            skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            perks: 'Knowledgeable Developer'
        },
        language: 'TypeScript'
    }

    const developer2: Fullstack = {
        name: 'Mr. Y',
        title: 'Full Stack Developer',
        // strength: {
        //     frontend: {
        //         skills: ['HTML', 'CSS', 'React', 'NextJS'],
        //         perks: 'Good Developer'
        //     },
        //     backend: {
        //         skills: ['HTML', 'CSS', 'JavaScript', 'Express', 'MongoDB'],
        //         perks: 'Knowledgeable Developer'
        //     }
        // }
        strength: {
            skills: ['HTML', 'CSS', 'Java'],
            perks: 'Fakibaj Developer'
        }
    }




}