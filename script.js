//your JS code here. If required.
// your JS code here. If required.

const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        return;
    }

    // create table row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    bookList.appendChild(row);

    // clear input fields
    form.reset();
});

// delete row
bookList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
