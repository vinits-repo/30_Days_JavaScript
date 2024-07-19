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

library.books.forEach((book) => {
  book.titleAndYear = function () {
    return `${this.title} was written in year ${this.year}`;
  };
});

library.books.forEach((e) => {
  console.log(e.titleAndYear());
});
