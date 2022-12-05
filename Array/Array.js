//creating array
const products=['lunch bag',8,587,'bags','pens','pencil','sharpner',['bread','choco','ginger'],['onion','tomato','ladysfinger']];
console.log(products);

//finding length of the array
console.log(products.length);

///modifying array
products[2]='orange';
products[8]='Apple';
console.log(products);
products[0]=products[5];
console.log(products);
 
//Accessing array
console.log(products[2]);
console.log(products[8]);
const random = ['tree', 795, [23, 13, 2]];
console.log(random[2][0]);

//finding index of the items in array list
console.log(products.indexOf('pens'));
console.log(products.indexOf('sharpner'));

//adding in the array list
products.push('mango','pineapple');
console.log(products)
products.unshift('lemon');
console.log(products);

//removing the items from array list
products.pop();
console.log(products);
products.shift()
console.log(products);
products.pop(5);
console.log(products);
const fruits = ['Mango', 'Apple', 'Lemon', 'orange'];
console.log(fruits.splice(1,1));
const index = fruits.indexOf('Apple');

if (index !== -1)
{
  fruits.splice(index, 2);
}
console.log(fruits);
const birds = ['Parrot', 'Falcon', 'Owl'];

//Accessin every items
for (const bird of birds) {
  console.log(bird);
}

//map method
function double(number) 
  {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled);

  //filter method
function islong(vegetables)
{
    return vegetables.length>6
}
const array1=[vege.filter(islong)];
console.log(array1);
const vege=['tomato','onion','capsicum','chilli','lemon']

//split()
const data=['tomato','onion','capsicum','chilli','lemon']
const cities = data.split(',');
console.log(cities);

//join()
const commaSeparated = cities.join(',');
console.log(commaSeparated);

//stringto
const dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(dogNames.toString());

