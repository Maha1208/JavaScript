const person = {
    name:["mahalakshmi","R"],
    age:22,
    Bio:function()
    {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`);
    },
    Intro:function()
    {
    console.log(`Hi Guys, my name is ${this.name[0]} nice to meet you all`);
    }   
  };
person.name;
person.name[0];
person.age;
person.Bio();
person.Intro();

//object literal
const persons = {};//empty object
persons.firstName = "John"; //adding 4 properties in empty object
persons.lastName = "Doe";
persons.eyeColor = "blue";
console.log(persons);

//creating object using new keyword
const contact = new Object();
contact.firstName = "John";
contact.lastName = "Doe";
contact.age = 50;
console.log(contact);