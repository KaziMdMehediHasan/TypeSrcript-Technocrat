{
    // spread operator

    const sheikh1: string[] = ["Imam Abu Hanifa", 'Imam Ahmad', 'Imam Malek'];
    const sheikh2: string[] = ['Usaimin', 'Ibn Baz', 'Albani'];

    sheikh1.push(...sheikh2);

    const mentors = {
        fiqh: 'Abu Hanifa',
        aqeeda: 'Asari',
    }

    const mentors2 = {
        debate: 'Dr. Zakir',
        analysis: 'Dr. Israr Ahmed'
    }

    const mentorList = {
        ...mentors, ...mentors2,
    }


    //rest operator

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
    };

    greetFriends('Fahim', 'Babu', 'Munim', 'Rifat');

}