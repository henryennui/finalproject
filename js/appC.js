function renderBooks(book_list) {
  
    //select the <tbody> element
    //you can make this more precise by using a descendant selector,
    //referring to a particular <table> by ID or style class name
    var tbody = document.querySelector(".books tbody");
  
    //clear any existing content in the body
    tbody.textContent = "";
  
    // for each book
    for (var i = 0; i < book_list.length; i++) {
      // render the book row
      var row = renderBook(book_list[i]);
      // append it to the table
      tbody.appendChild(row);
    }
  }
  
  function renderBook(book) {
    //create the <tr> element
    var tr = document.createElement("tr");
  
    //create and append the <td> elements
    tr.appendChild(renderBookProp(book.title, true));
    tr.appendChild(renderBookProp(book.author, true));
    tr.appendChild(renderBookProp(book.topics, true));
  
    //return the table row to the caller
    return tr;
  }
  
  function renderBookProp(content, nonNumeric) {
    //create the new <td> element
    var td = document.createElement("td");
  
    //set its text content to the provided value
    td.textContent = content;
  
    //if it should be formatted as numeric...
    if (nonNumeric) {
      //add the "numeric" style class
      td.classList.add("non-numeric");
    }
  
    //return the new element to the caller
    return td;
  }
  
  var searchInput = document.getElementById("book-filter");
  
  // Should this book be in our list?
  function isBookFound(book) {
    // Get the user input
    var userInput = searchInput.value;
  
    // Make the input lower case
    var lowercaseUserInput = userInput.toLowerCase();
  
    // Make the book topics lowercase
    var lowercaseTopics = book.topics.toLowerCase();
  
    // Check if the user input is in the lowercase book topics
    if (lowercaseTopics.indexOf(lowercaseUserInput) >= 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Listen for when a user types in the filter field
  searchInput.addEventListener("input", function () {
    // Find any books that match the user input
    var filtered_books = themeC.filter(isBookFound);
  
    // Update the book table with the new list
    renderBooks(filtered_books);
  });