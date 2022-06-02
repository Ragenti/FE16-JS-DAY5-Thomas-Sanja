//ex1

var car = {

    brand: "volvo",
    model: "xyz",
    color: "red",
    length: "2m",
    info: function () {

        return "This model "+this.model+" "+this.brand+" is "+this.color+" and has a length of "+this.length+".";
        }

}

var car2 = {

    brand: "mazda",
    model: "YYY",
    color: "blue",
    length: "1.5m",
    info: function () {

        return "This model "+this.model+" "+this.brand+" is "+this.color+" and has a length of "+this.length+".";
        }

}

var car3 = {

    brand: "ford",
    model: "ZZZ",
    color: "green",
    length: "2.5m",
    info: function () {

        return "This model "+this.model+" "+this.brand+" is "+this.color+" and has a length of "+this.length+".";
        }

}

var animal = {

    species: "tiger",
    sex: "male",
    age: "5 years",
    weight: "220kg",
    info: function () {

        return "The "+this.species+" is the world's biggest cat, this "+this.age+" old "+this.sex+" weighs "+this.weight+".";
        }
}

var animal2 = {

    species: "blue wale",
    sex: "male",
    age: "58 years",
    weight: "150000kg",
    info: function () {

        return "The "+this.species+" is the world's biggest animal, this "+this.age+" old "+this.sex+" weighs "+this.weight+".";
        }
}

var animal3 = {

    species: "fire slamander",
    sex: "female",
    age: "1 year",
    weight: "0.1kg",
    info: function () {

        return "The "+this.species+" is an amphibious animal, this "+this.age+" old "+this.sex+" weighs "+this.weight+".";
        }
}

var person = {

    name: "Herrmann",
    surname: "Mayer",
    sex: "male",
    age: "50",
    info: function () {

        return "Hello, my name is "+this.name+" "+this.surname+", I am a "+this.age+" year old "+this.sex+", nice to meet you.";
        }
}

var person2 = {

    name: "John",
    surname: "Doe",
    sex: "male",
    age: "27",
    info: function () {

        return "Hello, my name is "+this.name+" "+this.surname+", I am a "+this.age+" year old "+this.sex+", nice to meet you.";
        }
}

var person3 = {

    name: "Maria",
    surname: "Doe",
    sex: "female",
    age: "25",
    info: function () {

        return "Hello, my name is "+this.name+" "+this.surname+", I am a "+this.age+" year old "+this.sex+", nice to meet you.";
        }
}

console.log(person.info());

console.log(person2.info());

console.log(person3.info());

console.log(animal.info());

console.log(animal2.info());

console.log(animal3.info());

console.log(car.info());

console.log(car2.info());

console.log(car3.info());

//ex 2

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;

var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

sandwiches = JSON.parse(sandwiches); //translate to js

fries = JSON.parse(fries);

console.log("My favorite sandwich is a "+sandwiches.sandwich+" wich has approximately "+sandwiches.calories+" calories, along with it I enjoy eating "+fries.fries_size+" wich have about "+fries.calories+" calories.");













