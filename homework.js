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
      constructor(owner, name, price){
        this.owner = "";
        this.name = name;
        this.price = 15;
      }
      wheelRun(){
        console.log("squeak squeak");
      }
      eatFood(){
        return "nibble nibble";
        //console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
        //console.log(this.price);
    }

    setName(name) {
        this.name = name;
    }

    setOwner(owner) {
        this.owner = owner;
    }
}

h = new Hamster();
 //console.log(h.wheelRun());
 h.wheelRun();
// console.log(h.eatFood());
// console.log(h.getPrice());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
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
        return `Good morning ${this.name}`;
    }
    eat(weight,mood) {
        
         this.weight = this.weight + weight;
         this.mood = this.mood + mood;
         
    }
    exercise(weight){
        this.weight = this.weight - weight;
        return this.weight;
    }
    ageUp(age,height,weight,mood,bankAccount){
        this.age = age+1;
        this.height= height+1;
        this.weight = weight+1;
        this.mood = mood-1;
        this.bankAccount = bankAccount+10;
    }

    buyHamster(h){
        this.hamsters.push(h);
        this.eat(5,10);
        this.bankAccount = this.bankAccount - h.getPrice();

    }

    setName(name) {
        this.name= name;
    }

    setAge(age) {
        this.age = age;
    }


}

const p= new Person();

console.log(p.getName());
console.log(p.getAge());
console.log(p.getWeight());
console.log(p.greet());
p.eat(10,3)
console.log(" decrement in weight =  " + p.weight);
console.log(p.exercise(10));
p.ageUp(5,2,8,3,10);
console.log(p);
console.log(h);
p.buyHamster(h);
console.log(p);
console.log(h);

const Timmy = new Person("Timmy");
console.log(Timmy);
Timmy.setAge(5);
Timmy.eat(15,5);
console.log(Timmy);
Timmy.exercise(5);
console.log(Timmy);
Timmy.setAge(9);
console.log(Timmy);
const gus = new Hamster();
gus.setName("Gus");
gus.setOwner("Timmy");
console.log(gus);
Timmy.buyHamster(gus);
console.log(Timmy);
Timmy.setAge(15);
console.log(Timmy);
Timmy.eat(2,2);
console.log(Timmy);
Timmy.exercise(2);
console.log(Timmy);
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
        const dinner = new Dinner(appetizer, entree, dessert);
        this.dinners.push(dinner);
    }
    findDinner (index){
       return this.dinners[index];
    }

}

const Chef1 = new Chef('john');
console.log(Chef1);
Chef1.makeDinner('chicken nuggets','noodles','cake');
Chef1.makeDinner('chicken strips','rice','drink');
Chef1.makeDinner('Fish nuggets','chips','choco');
console.log(Chef1);
console.log(Chef1.findDinner(0));

