const list = document.querySelector(".list");
const btn = document.querySelector(".btn");

function addAuthor(author) {
  const li = document.createElement("li");
  li.textContent = author;
  list.appendChild(li);
}

btn.addEventListener("click", () => {
  fetch("/task-2/books.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        addAuthor(book.author);
      });
    })
    .catch((error) => console.error("Data is not received", error));
});
