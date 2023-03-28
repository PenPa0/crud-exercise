//initialize first book objects
// let books = [
//     {title: "House of flames", description: "Thriller"},// {id0, title: "House of flames", description: "Thriller"},
//     {title: "The God of Endings", description: "Historical Fantasy"},
//     {title: "The Four Winds", description: "Historical Fiction"},
//     {title: "Percy Jackson The Battle of the Labyrinth", description: "Greek mythology, Fantasy, Adventure Fiction"},
//     {title: "Harry Potter and the Philospher's Stone", description: "Fantasy, Adventure, Narrative"},
// ]

//object constructor function
function Book(title,description) {
    this.title = title
    this.description = description
}

//initialize array and use "new" keyword
let books = [
    new Book("House of Flames", "Thriller"),
    new Book("The God of Endings", "Historical Fantasy"),
    new Book("The Four Winds", "Historical Fiction"),
    new Book("Percy Jackson The Battle of the Labyrinth", "Greek Mythology, Fantasy"),
    new Book("Harry Potter and the Philospher's Stone", "Fantasy, Adventure")
]

// function bookMaker(title,description) {
//     let books = [{title,description}]
// }
// const newBook = new Book("House of flames","Thriller")  //class constructors using "new" keyword

// let userTitle = document.getElementById("bookTitle").value
// let userGenre = document.getElementById("bookGenre").value

let bookList = document.createElement("div");

//Load books into the bookList div from the books array
function loadBooks() {
    for (let book in books) {
        const bookItem = document.createElement("p")
        bookItem.innerHTML = `${books[book].title} - ${books[book].description} <button onclick="editBook(${book})">Edit</button> <button onclick="deleteBook(${book})">Delete</button>`
        bookList.appendChild(bookItem);
    }
}

// initial load page, display books into the booklist div by calling the loadBooks()  
document.onload = loadBooks()

function createBookObjects() {
    let userTitle = document.getElementById("bookTitle").value
    let userGenre = document.getElementById("bookGenre").value
    let bookObjects = {}
    bookObjects.title = userTitle
    bookObjects.description = userGenre
    const indexOfNewElement = books.length // 4 books  index = 0,1,2,3
    books.push(bookObjects) // +1 5 books index = 0,1,2,3,4
    document.getElementById("bookTitle").value = ""
    document.getElementById("bookGenre").value = "" //so everytime after the button is clicked the input fields are cleared

    // create a new book item and add a single entry to the bookList div
    const bookItem = document.createElement("div")
    bookItem.innerHTML = `<p>${bookObjects.title} - ${bookObjects.description}
    <button onclick="editBook(${indexOfNewElement})">Edit</button> <button onclick="deleteBook(${indexOfNewElement})">Delete</button></p>`
    bookList.appendChild(bookItem)
}

function editBook(index) { //instead of index use the ID of the book object, refer to line 2
    const newTitle = prompt("Edit new Title")
    const newGenre = prompt("Edit new Genre")
    let editObject = {
        title: newTitle,
        description: newGenre
    }
    books[index] = editObject
    refreshList()
    loadBooks()
}

function refreshList() {
    bookList.innerHTML = ""
}

function deleteBook(book) {
    books.splice(book,1)
    refreshList()
    loadBooks()
}

// function deleteBook() {
//     this.parentElement.remove();
// }
document.getElementById("bookListContainer").appendChild(bookList)


// const games = new Game