class Person {

    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  };

class Student extends Person {

    #year;
  
    constructor(name, year) 
    {
      super(name);
      this.#year = year;
    }
  
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in ${this.#year} year.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
    }

  }
  const maha= new Student('maha', 2);

maha.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
maha.canStudyArchery(); // true

//summers.#year; //syntax error
  