class Person {
    constructor(name, age) {
        this._name = name; 
        this._age = age; 
    }

    get name() {
        return this._name; 
    }

    set age(value) {
        this._age = value; 
    }

    get age() {
        return this._age; 
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age); // Call the parent constructor
    }

    study() {
        console.log(`${this.name} is studying`); // This logs the message to the console
        return `${this.name} is studying`; // Return the message
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach() {
		  console.log(`${this.name} is teaching`);
        return `${this.name} is teaching`; 
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;