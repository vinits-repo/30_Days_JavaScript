let library = {
  name: "History of Bharat",
  books: [
    {
      title: "Bhagwat Geeta",
      author: "Shri Krishna",
      year: "7000 years ago",
    },
    {
      title: "Ramayana",
      author: "Valmiki",
      year: "8th century",
    },
    {
      title: "Mahabharat",
      author: "Ved Vayash",
      year: "3rd-4th century",
    },
  ],
};

library.books.forEach((book, index) => {
  console.log(`Book ${index + 1}:`);
  for (let prop in book) {
    if (book.hasOwnProperty(prop)) {
      console.log(`  ${prop}: ${book[prop]}`);
    }
  }
});
