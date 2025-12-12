//QUSTION NO 1

let dog = {}

//QUESTION NO 2

console.log(dog);

//QUESTION NO. 3 

dog = {
    name: 'tommy',
    leg: 4,
    colour: 'brown',
    age: 3,
    bark: function(){
        return 'woof woof!!'
    }
}

//QUESTION NO. 4

console.log(dog.name);
console.log(dog.leg);
console.log(dog.colour);
console.log(dog.age);
console.log(dog.bark());

//QUESTION NO. 5

dog.breed = 'Husky'
dog.getInfo = function(){
    return `this dog's breed is ${dog.breed}. and his name is ${dog.name}.`
}

console.log(dog.breed);
console.log(dog.getInfo());

//

let empty = []

//

let number = [1,2,3,4,5]

//

console.log(number[0]);
console.log(number[2]);
console.log(number[4]);

//

let mixedDataTypes = ['hasan', , 'shah', 20, {college: "lala's"}]
console.log(mixedDataTypes.length);
console.log(typeof mixedDataTypes[1]);