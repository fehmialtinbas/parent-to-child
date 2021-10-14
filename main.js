class person {
    constructor() {
        this.name = "Fehmi";
        this.eyeColor = "Brown";
        this.hairColor = "Brown";
    };
};

const person1 = new person();

class firstChildFrom1 extends person {
    constructor() {
        super()
        this.name = "Ahmet"
    };
};

const person2 = new firstChildFrom1()

class secondChildFrom1 extends person {
    constructor() {
        super()
        this.name = "Ayşe"
        this.eyeColor="Green"
    };
};

const person3 = new secondChildFrom1()

class firstChildFrom1_1 extends firstChildFrom1 {
    constructor() {
        super()
        this.name = "Vedide"
    };
};

const person4 = new firstChildFrom1_1()

class secondChildFrom1_2 extends firstChildFrom1 {
    constructor() {
        super()
        this.name = "Elif"
    };
};

const person5 = new secondChildFrom1_2()

class firstChildFrom2_1 extends secondChildFrom1 {
    constructor() {
        super()
        this.name = "Vedide"
    };
};
const person6 = new firstChildFrom2_1()
class secondChildFrom2_2 extends secondChildFrom1 {
    constructor() {
        super()
        this.name = "Hamza"
    };
};

const person7 = new secondChildFrom2_2()

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);
console.log(person7);