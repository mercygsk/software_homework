/*Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price*/

class Hamster{
    constructor(name){
        this.owner = '';
        this.name = name;
        this.price = 15;
      }

    wheelRun(){
        console.log("squeak squeak");
      }

    eatFood(){
        console.log("nibble nibble");
      }

    getPrice(){
        return this.price; 
    }

    setOwner(owner){
        this.owner = owner;
    }
}

    ham = new Hamster();
    // ham.wheelRun();
    // ham.eatFood();
    // console.log(ham.getPrice());
    console.log('/////////////////////////////////////////////////////////////////////');

//////////////////////////////////////////////////////////////////////////////

/*Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())*/

class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.height= 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    getWeight(){
        return this.weight;
    }

    greet(){
        return `Hello ${this.name}`;
    }

    eat() {
         this.weight++;
         this.mood++;
    }

    exercise(){
        this.weight--;
    }

    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const timmy = new Person("Timmy");
//console.log(timmy);
console.log(`My name is ${timmy.getName()}. I'm a baby.`);

for( let i=0; i<5; i++){
    timmy.ageUp();
}
//console.log(timmy);
console.log(`\nNow I'm ${timmy.getAge()} years old. having mood swings ${timmy.mood} units, weight ${timmy.getWeight()} lbs, height ${timmy.height} units and my bank balance ${timmy.bankAccount} from my birthday money.`);


for( let i=0; i<5; i++){
    timmy.eat();
}
//console.log(timmy);
console.log(
    `\nI'm so pampered and I ate 5 times, gained weight ${timmy.getWeight()} lbs.`);

for( let i=0; i<5; i++){
    timmy.exercise();
}
//console.log(timmy);
console.log(
    `\nMy kindergarten is coming up, and I want to look good, so I exercises 5 times and lost 5 weight lbs and now I'm ${timmy.getWeight()} weight lbs.`);

for( let i=0; i<9; i++){
    timmy.ageUp()
}
//console.log(timmy);
console.log(`\nNow I'm ${timmy.getAge()} years old. having mood swings ${timmy.mood} units, weight ${timmy.getWeight()} lbs, height ${timmy.height} units and my bank balance ${timmy.bankAccount} from my birth day money.`);

const gus = new Hamster("Gus");
//console.log(gus);
gus.setOwner("Timmy");
//console.log(gus);
console.log(`\nI want to buy a pet hamster with my birthday money ${timmy.bankAccount}, name my new pet as ${gus.name}.`);
timmy.buyHamster(gus);
//console.log(timmy);
console.log(`\nI bought new pet hamster ${gus.name}. It accepted ${timmy.getName()} as its new owner`);

for( let i=0; i<15; i++){
    timmy.ageUp();
}
//console.log(timmy);

for( let i=0; i<2; i++){
    timmy.eat()
}
//console.log(timmy);

for( let i=0; i<2; i++){
    timmy.exercise()
}
//console.log(timmy);
console.log(
    `\nAfter 15 years, my age is ${timmy.getAge()}, now I'm an adult with a mood of ${timmy.mood} units. ` +
    `healthy and excercise daily with a weight of ${timmy.getWeight()}.`
  );

console.log("////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

class Dinner{
    constructor(appetizer, entree, dessert){
    this.appetizer = appetizer;
    this.entree =  entree;
    this.dessert = dessert;
    }
}
class Chef{
    constructor(chef){
        this.chef = chef;
        this.dinners = [];
    }
    makeDinner(appetizer, entree, dessert){
        const dinner = new Dinner(appetizer, entree, dessert); // created a variable 
        this.dinners.push(dinner);
    }
    findDinner(index){
       return this.dinners[index];
    }
}

const chef = new Chef('Mercy');
console.log(chef);
chef.makeDinner('Chicken Nuggets','Noodles','Cake');
chef.makeDinner('Dynamite Shrimp','Fried Rice','Drink');
chef.makeDinner('Fried Fish','Chow Mein','Icecream');
console.log(chef);
console.log(chef.findDinner(0));