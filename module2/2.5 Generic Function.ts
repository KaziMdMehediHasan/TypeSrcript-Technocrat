{
    // functions with generics

    const createArray = (param: string): string[] => {
        return [param];
    }

    const res1 = createArray('BD');

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const resGeneric = createArrayWithGeneric<string>('USA');

    type User = {
        id: number;
        name: string;
    }

    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'John' });

    // function generic tuple

    const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }

    const resGenericTuple = createArrayWithGenericTuple<string, number>('USA', 1);

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next level web development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Mr.X', email: 'mr.x@gmail.com', devType: 'Level 2' });
    const student2 = addCourseToStudent({ name: 'Mr.X', email: 'mr.x@gmail.com', hasApple: true });
    //
}