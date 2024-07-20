let firstName = ["Vinit"];
let lastName = ["Yadav"];
let name = [...firstName, ...lastName];
console.log(name);


function square(...nums){
    return nums.map(num => num ** 2)
}
let ans = square(2,3,4)
console.log(ans);