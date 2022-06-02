var car = {

    brand: "volkswagen",

    model: "tiguan",

    price: 29999,

    img: "https://cdn.pixabay.com/photo/2019/01/27/15/45/vw-3958334_960_720.jpg",

    year: 2020,

    fuel: "petrol",


    carInfo: function() {

        return this.brand + ' ' + this.model + ' ' + this.price + ' ' + this.year;

    }

}

var animal = {

    name: "mata",

    owner: "sanja",

    age: 2,

    img: "https://cdn.pixabay.com/photo/2016/12/15/23/24/cat-1910266_960_720.jpg",

    kind: "cat",

    race: "rusian blue",

    hobbies: ['chasing Mouse', 'cuddling'],

    animalInfo: function() {

        return this.name + ' ' + this.owner + ' ' + this.kind + ' ' + this.race;

    }

}

var person = {

        firstName: "sanja",

        lastName: "pavic",

        age: 29,

        img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",


        drivingLicense: true,

        courses: ['JS', 'PHP', 'Symfony'],

        greetings: function() {

            return `Hi, My name is ${this.firstName} ${this.lastName}.`;

        },

        fullName: function() {

            return this.firstName + ' ' + this.lastName;

        }

    }
    // console.table(person);
    // console.log(person.firstName);
    // console.log(person.greetings());
    // console.log(person.fullName());
    // console.log(animal["kind"]);


document.getElementById("brand").innerHTML = car.brand;
document.getElementById("model").innerHTML = car.model;
document.getElementById("price").innerHTML = car.price;

document.getElementById("name").innerHTML = animal.name;
document.getElementById("age").innerHTML = animal.age;
document.getElementById("race").innerHTML = animal.race;
document.getElementById("personName").innerHTML = person.fullName();
document.getElementById("ageP").innerHTML = person.age;
document.getElementById("courses").innerHTML = person.courses;




//print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories
var sandwiches = { sandwich: "hamburger", calories: "260" };
var fries = { fries_size: "Large French Fries", calories: "570" };

console.log()