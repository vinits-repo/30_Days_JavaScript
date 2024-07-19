let book = {
    title: "Bhagwat Geeta",
    author: "Shri Krishna",
    year: "7000 years ago"
}

book.detail = () => {
    return `${book.title} is spoken by ${book.author}.`
}

console.log(book.detail());