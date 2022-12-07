// //instance of class
// //constructor is a special function
// //constructor(Professor(name, teaches))
// walsh = new Professor("Walsh", "Psychology");
// lillian = new Professor("Lillian", "Poetry");

// walsh.teaches; 
// // 'Psychology'

// walsh.introduceSelf(); 
// // 'My name is Professor Walsh and I will be your Psychology professor.'

// lillian.teaches; 
// // 'Poetry'

// lillian.introduceSelf(); 
// // 'My name is Professor Lillian and I will be your Poetry professor.'

class Person
 {

    name;
  
    constructor(name) 
    {
      this.name = name;
    }
  
    introduceSelf() 
    {
      console.log(`Hi! I'm ${this.name}`);
    }
  };
  
  const my_name= new Person('maha');
  my_name.introduceSelf();
  
//omitting constructor (creates a default constructor)
  class Animal 
  {

    sleep() 
    {
      console.log('zzzzzzz');
    }
  
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'
  