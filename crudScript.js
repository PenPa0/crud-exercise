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
    const indexOfNewElement = books.length 
    books.push(bookObjects) 
    document.getElementById("bookTitle").value = ""
    document.getElementById("bookGenre").value = "" //so everytime after the button is clicked the input fields are cleared

    // create a new book item and add a single entry to the bookList div
    const bookItem = document.createElement("div")
    bookItem.innerHTML = `<p>${bookObjects.title} - ${bookObjects.description}
    <button onclick="editBook(${indexOfNewElement})">Edit</button> <button onclick="deleteBook(${indexOfNewElement})">Delete</button></p>`
    bookList.appendChild(bookItem)
}


function editBook(index) {
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


document.getElementById("bookListContainer").appendChild(bookList)