// Numbers
let age = 21;

// String
let myName = "Ram";

// boolean
let life = true;

// object
let student = {
  key: "student1",
};

// Array
let colors = ["Red", "Green", "Blue", "White", "Black"];


console.table([`Type: ${typeof age},Value: ${age}`,
    `Type: ${typeof myName},Value: ${myName}`,
    `Type: ${typeof life},Value: ${life}`,
    `Type: ${typeof student},Value: ${student.key}`,
    `Type: ${typeof colors},Value: ${colors}`
]);