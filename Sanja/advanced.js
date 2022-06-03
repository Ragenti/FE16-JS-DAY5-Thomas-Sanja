console.log("works");

let booksList = JSON.parse(books);
// const listContainer = document.querySelector(".book-list");
// printInfo = () => {
//     listContainer.innerHTML = "";
//     booksList.forEach((book) => {
//         listContainer.innerHTML += `<div class="container book-list">
//     <div id="img " style="width: 18rem">${book.image}</div>
//     <div id="result" class="row">
//         <p class="card-title" id="title">${book.title}</p>
//         <p id="author">${book.author}</p>
//     </div>
// </div>`
//     });

// };
// printInfo();
let card = document.getElementById("book-list");

for (let i = 0; i < booksList.length; i++) {
    card.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${booksList[i].image}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${booksList[i].title}</h5>
<p class="card-text">${booksList[i].author}</p>
<p class="read" id="read" class="card-text">${booksList[i].read}</p>
</div>
</div>`
    let read1 = document.getElementsByClassName(".read");

    if (booksList[i].read.innerHTML == "Read") {
        read1[i].css.backgroundColor = "green";
    } else {
        //         read1[i].style.backgroundColor = "blue";
    }
}