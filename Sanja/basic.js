var car = {

    firstName: "john",

    owner: "doe",

    age: 25,

    drivingLicense: true,

    hobbies: ['swim', 'read', 'coding'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

    }

}

var animal = {

    name: "mara",

    owner: "sanja",

    age: 2,

    kind: cat,

    hobbies: ['swim', 'read', 'coding'],

    fullName: function() {

        return this.firstName + ' ' + this.lastName;

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