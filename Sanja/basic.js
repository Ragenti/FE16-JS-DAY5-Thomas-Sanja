var car = {

    mark: "volkswagen",

    model: "tiguan",

    price: 29999,

    year: 2020,

    fuel: "petrol",


    fullName: function() {

        return this.mark + ' ' + this.model + ' ' + this.price + ' ' + this.year;

    }

}

var animal = {

    name: "mata",

    owner: "sanja",

    age: 2,

    kind: "cat",

    race: "rusian blue",

    hobbies: ['chasing Mouse', 'cuddling'],

    fullName: function() {

        return this.name + ' ' + this.owner + ' ' + this.kind + ' ' + this.race;

    }

}

var person = {

    firstName: "sanja",

    lastName: "pavic",

    age: 29,

    drivingLicense: true,

    hobbies: ['bike', 'read', 'coding'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

    }

}
console.table(person);