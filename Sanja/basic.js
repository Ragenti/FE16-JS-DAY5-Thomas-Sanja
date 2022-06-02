var car = {

    brand: "volkswagen",

    model: "tiguan",

    price: 29999,

    img: "https://cdn.pixabay.com/photo/2019/01/27/15/45/vw-3958334_960_720.jpg",

    year: 2020,

    fuel: "petrol",


    carInfo: function() {

        return this.brand + ' ' + this.model + ' ' + this.price + ' ' + this.year;

    },
    info: function() {
        return `<div class="card m-5" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} ${this.model}</h5>
          <p class="card-text"> ${this.year}, ${this.fuel}</p>
        </div>
      </div>`;
    }

}

var animal = {

    name: "mata",

    owner: "sanja",

    age: 2,

    img: "https://cdn.pixabay.com/photo/2016/12/15/23/24/cat-1910266_960_720.jpg",

    kind: "cat",

    breed: "rusian blue",

    hobbies: ['chasing Mouse', 'cuddling'],

    animalInfo: function() {

        return this.name + ' ' + this.owner + ' ' + this.kind + ' ' + this.breed;

    },
    info: function() {
        return `<div class="card  m-5" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.name} ${this.breed}</h5>
          <p class="card-text">${this.age} , ${this.kind} , ${this.hobbies}</p>
        </div>
      </div>`;
    }

}

var person = {

        firstName: "sanja",

        lastName: "pavic",

        age: 29,

        img: "https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg",


        drivingLicense: true,

        courses: ['JS', 'PHP', 'Symfony'],

        greetings: function() {

            return `Hi, My name is ${this.firstName} ${this.lastName}.`;

        },

        fullName: function() {

            return this.firstName + ' ' + this.lastName;

        },
        info: function() {
            return `<div class="card  m-5" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${this.firstName} ${this.lastName} ${this.age}</h5>
              <p class="card-text">i like to ${this.courses[1]}</p>
            </div>
          </div>`;
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
document.getElementById("breed").innerHTML = animal.breed;
document.getElementById("personName").innerHTML = person.fullName();
document.getElementById("ageP").innerHTML = person.age;
document.getElementById("courses").innerHTML = person.courses;

document.getElementById("result").innerHTML += car.info();
document.getElementById("result").innerHTML += animal.info();
document.getElementById("result").innerHTML += person.info();




//print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories
var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

sandwiches = JSON.parse(sandwiches);
fries = JSON.parse(fries);

console.log("My favorite sandwich is a " + sandwiches.sandwich + " which has approximately " + sandwiches.calories + " calories, along with it I enjoy eating " + fries.fries_size + " which have about " + fries.calories + " calories")