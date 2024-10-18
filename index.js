function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((data) => renderBooks(data))
    .catch((error) => console.error("Error fetching books:", error));
}
function renderBooks(books) {
  const booksList = document.getElementById("books-list");
  booksList.innerHTML = ""; 

  books.forEach(book => {
    const listItem = document.createElement("li");
    listItem.textContent = book.name; 
    booksList.appendChild(listItem);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  fetchBooks();
});