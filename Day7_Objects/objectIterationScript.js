let book = {
  title: "Bhagwat Geeta",
  author: "Shri Krishna",
  year: "5000 years ago",
};

for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

console.log(Object.keys(book));
console.log(Object.values(book));
