{
    //type constraints
    const addCourseToStudent = <T extends { id: number; name: string; email: string; }>(student: T) => {
        const course = 'Next level web development';

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 22, name: 'Mr.X', email: 'mr.x@gmail.com', devType: 'Level 2' });
    const student2 = addCourseToStudent({ id: 33, name: 'Mr.X', email: 'mr.x@gmail.com', hasApple: true });
    const student3 = addCourseToStudent({ id: 44, name: 'Mr. Z', email: 'dasda', emni: 'emni' });
    //
}