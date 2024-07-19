let book = {
  title: "Bhagwat Geeta",
  author: "Shri Krishna",
  year: "7000 years ago",

  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },

  updateYear: function (newYear) {
    this.year = newYear;
  },

  getTitleAndYear: function () {
    return `${this.title}, published ${this.year}`;
  },
};

console.log(book);

console.log(book.getDetails());

book.updateYear("5000 years ago");
console.log(book);

console.log(book.getTitleAndYear());
