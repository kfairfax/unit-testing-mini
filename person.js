class Person {
    constructor(birthYear){
        this.dateObj = new Date(`01/01/${birthYear}`);
        this.birthYear = birthYear;

    }
    // when the object is created, the 'this' keyword is replacing the name of the newly created object
// each newly constructed object knows who it's parent constructor object is
// all instances of an object have access to the prototype ofject
// array methods (push, pop, map, sort)are all prototype methods that don't live on each instance of the array

    isMillennial(){
        return this.birthYear >1982;
    }
    // a method on a class is created as a prototype object that is attached to a function
    

    calculateAge(){
        let ageDifMs = Date.now() - this.dateObj.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }

    isRetiree(){
        let age = this.calculateAge();
        return age >= 65;
    }
}

module.exports = Person;