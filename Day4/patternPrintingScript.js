// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
