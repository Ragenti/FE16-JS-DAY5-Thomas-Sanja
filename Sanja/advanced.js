console.log("works");

const booksList = JSON.parse(books);
const listContainer = document.querySelector(".book-list");
printInfo = () => {
    listContainer.innerHTML = "";
    booksList.forEach((book) => {
        listContainer.innerHTML += `<div class="container book-list">
    <div id="img " style="width: 18rem">${book.image}</div>
    <div id="result" class="row">
        <p class="card-title" id="title">${book.title}</p>
        <p id="author">${book.author}</p>
    </div>
</div>`
    });

};
printInfo();