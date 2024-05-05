{
    // oop-class

    class Animal {
        // public name: string;
        // species: string;
        // sound: string;

        //parameter properties

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepherd', 'Dog', 'Woof');
    const cat = new Animal('Persian', 'Cat', 'Mew');

    cat.makeSound();
    //
}