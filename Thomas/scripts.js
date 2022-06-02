


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



//intermediate 


let mydata = JSON.parse(employees);

document.querySelector(`body`).style.width = `600px`;

document.querySelector(`body`).style.textAlign = `center`;

        for (let i = 0; i < mydata.length; i++){
            
            if (i < 1){

                document.getElementById('box').innerHTML += "<table id=table><thead><tr><th>Unique ID</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Job Title</th><th>Sallary</th></tr></thead><tbody id=table_body></tbody></table>"
            }
            
            document.getElementById('table_body').innerHTML += "<tr><td>"+mydata[i].UniqueID+"</td><td>"+mydata[i].FirstName+"</td><td>"+mydata[i].LastName+"</td><td>"+mydata[i].EmailAddress+"</td><td>"+mydata[i].JobTitle+"</td><td>"+mydata[i].Salary+"</td></tr>";
            
            if (i > (mydata.length - 2)){

                var cells = document.querySelectorAll('th,td');

                for (let i = 0; i<cells.length; i++){

                    cells[i].style.borderRight = "5px solid red";
                    cells[i].style.borderBottom = "5px solid red";

                } 
            }
        }
        


                                                // function loadJSON(callback) {

                                                // var xobj = new XMLHttpRequest();
                                                // xobj.overrideMimeType("application/json");
                                                // xobj.open('GET', 'file.json', true);
                                                // xobj.onreadystatechange = function () {
                                                // if (xobj.readyState == 4 && xobj.status == "200") {

                                                // // .open will NOT return a value but simply returns undefined in async mode so use a callback
                                                // callback(xobj.responseText);

                                                // }
                                                // }
                                                // xobj.send(null);

                                                // }

                                                // // Call to function with anonymous callback
                                                // loadJSON(function(response) {
                                                // // Do Something with the response e.g.
                                                // //jsonresponse = JSON.parse(response);

                                                // // Assuming json data is wrapped in square brackets as Drew suggests
                                                // //console.log(jsonresponse[0].name);

                                                // });



                                                // document.getElementById('table').innerHTML += "My name is " + mydata[i].FirstName + " and I am working as a " +

                                                //             mydata[i].jobTitleName + "<hr>";



//Advanced


let bookdata = JSON.parse(books);

document.getElementById('bookBox').style.textAlign = `center`;

for (let i = 0; i < bookdata.length; i++){

    document.getElementById('bookBox').innerHTML += `<hr><p id = "text_${i}">${bookdata[i].title} by ${bookdata[i].author}</p><div id = "pic_${i}"></div><hr>`;

    if (bookdata[i].read == true) {

        document.getElementById(`text_${i}`).style.color = `green`;

        document.getElementById(`text_${i}`).style.backgroundColor = `lightgrey`;

    } else {

        document.getElementById(`text_${i}`).style.color = `red`;

        document.getElementById(`text_${i}`).style.backgroundColor = `yellow`;

    }

    document.getElementById(`pic_${i}`).style.backgroundImage = `url(${bookdata[i].image})`;

    document.getElementById(`pic_${i}`).style.height = `600px`;

    document.getElementById(`pic_${i}`).style.backgroundPosition = `center`;

    document.getElementById(`pic_${i}`).style.backgroundRepeat = `no-repeat`;

    document.getElementById(`pic_${i}`).style.backgroundSize = `contain`;
};
